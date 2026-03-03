---
title: "std::unique_ptr"
source_path: "cpp/memory/unique_ptr"
header: "<memory>"
category: "memory"
since: "C++11"
---

std::unique_ptr is a smart pointer that owns (is responsible for) and manages another object via a pointer and subsequently disposes of that object when the unique_ptr goes out of scope.

## Declarations
```cpp
template<
class T,
class Deleter = std::default_delete<T>
> class unique_ptr;
```
_(since C++11)_

```cpp
template <
class T,
class Deleter
> class unique_ptr<T[], Deleter>;
```
_(since C++11)_

## Notes
Only non-const unique_ptr can transfer the ownership of the managed object to another unique_ptr. If an object's lifetime is managed by a const std::unique_ptr, it is limited to the scope in which the pointer was created.

std::unique_ptr is commonly used to manage the lifetime of objects, including:

std::unique_ptr may be constructed for an [incomplete type](/cpp/language/incomplete_type/) T, such as to facilitate the use as a handle in the [pImpl idiom](/cpp/language/pimpl/). If the default deleter is used, T must be complete at the point in code where the deleter is invoked, which happens in the destructor, move assignment operator, and reset member function of std::unique_ptr. (In contrast, [std::shared_ptr](/cpp/memory/shared_ptr/) can't be constructed from a raw pointer to incomplete type, but can be destroyed where T is incomplete). Note that if T is a class template specialization, use of unique_ptr as an operand, e.g. !p requires T's parameters to be complete due to [ADL](/cpp/language/adl/).

If T is a [derived class](/cpp/language/derived_class/) of some base B, then std::unique_ptr<T> is [implicitly convertible](/cpp/memory/unique_ptr/unique_ptr/) to std::unique_ptr<B>. The default deleter of the resulting std::unique_ptr<B> will use [operator delete](/cpp/memory/new/operator_delete/) for B, leading to [undefined behavior](/cpp/language/destructor/#Virtual_destructors) unless the destructor of B is [virtual](/cpp/language/virtual/). Note that [std::shared_ptr](/cpp/memory/shared_ptr/) behaves differently: [std::shared_ptr](/cpp/memory/shared_ptr/)<B> will use the [operator delete](/cpp/memory/new/operator_delete/) for the type T and the owned object will be deleted correctly even if the destructor of B is not [virtual](/cpp/language/virtual/).

Unlike [std::shared_ptr](/cpp/memory/shared_ptr/), std::unique_ptr may manage an object through any custom handle type that satisfies [NullablePointer](/cpp/named_req/nullablepointer/). This allows, for example, managing objects located in shared memory, by supplying a Deleter that defines typedef [boost::offset_ptr](https://www.boost.org/doc/libs/release/doc/html/boost/interprocess/offset_ptr.html) pointer; or another [fancy pointer](/cpp/named_req/allocator/#Fancy_pointers).

## Example
```cpp
#include <cassert>
#include <cstdio>
#include <fstream>
#include <iostream>
#include <locale>
#include <memory>
#include <stdexcept>
 
// helper class for runtime polymorphism demo below
struct B
{
    virtual ~B() = default;
 
    virtual void bar() { std::cout << "B::bar\n"; }
};
 
struct D : B
{
    D() { std::cout << "D::D\n"; }
    ~D() { std::cout << "D::~D\n"; }
 
    void bar() override { std::cout << "D::bar\n"; }
};
 
// a function consuming a unique_ptr can take it by value or by rvalue reference
std::unique_ptr<D> pass_through(std::unique_ptr<D> p)
{
    p->bar();
    return p;
}
 
// helper function for the custom deleter demo below
void close_file(std::FILE* fp)
{
    std::fclose(fp);
}
 
// unique_ptr-based linked list demo
struct List
{
    struct Node
    {
        int data;
        std::unique_ptr<Node> next;
    };
 
    std::unique_ptr<Node> head;
 
    ~List()
    {
        // destroy list nodes sequentially in a loop, the default destructor
        // would have invoked its `next`'s destructor recursively, which would
        // cause stack overflow for sufficiently large lists.
        while (head)
        {
            auto next = std::move(head->next);
            head = std::move(next);
        }
    }
 
    void push(int data)
    {
        head = std::unique_ptr<Node>(new Node{data, std::move(head)});
    }
};
 
int main()
{
    std::cout << "1) Unique ownership semantics demo\n";
    {
        // Create a (uniquely owned) resource
        std::unique_ptr<D> p = std::make_unique<D>();
 
        // Transfer ownership to `pass_through`,
        // which in turn transfers ownership back through the return value
        std::unique_ptr<D> q = pass_through(std::move(p));
 
        // p is now in a moved-from 'empty' state, equal to nullptr
        assert(!p);
    }
 
    std::cout << "\n" "2) Runtime polymorphism demo\n";
    {
        // Create a derived resource and point to it via base type
        std::unique_ptr<B> p = std::make_unique<D>();
 
        // Dynamic dispatch works as expected
        p->bar();
    }
 
    std::cout << "\n" "3) Custom deleter demo\n";
    std::ofstream("demo.txt") << 'x'; // prepare the file to read
    {
        using unique_file_t = std::unique_ptr<std::FILE, decltype(&close_file)>;
        unique_file_t fp(std::fopen("demo.txt", "r"), &close_file);
        if (fp)
            std::cout << char(std::fgetc(fp.get())) << '\n';
    } // `close_file()` called here (if `fp` is not null)
 
    std::cout << "\n" "4) Custom lambda-expression deleter and exception safety demo\n";
    try
    {
        std::unique_ptr<D, void(*)(D*)> p(new D, [](D* ptr)
        {
            std::cout << "destroying from a custom deleter...\n";
            delete ptr;
        });
 
        throw std::runtime_error(""); // `p` would leak here if it were a plain pointer
    }
    catch (const std::exception&)
    {
        std::cout << "Caught exception\n";
    }
 
    std::cout << "\n" "5) Array form of unique_ptr demo\n";
    {
        std::unique_ptr<D[]> p(new D[3]);
    } // `D::~D()` is called 3 times
 
    std::cout << "\n" "6) Linked list demo\n";
    {
        List wall;
        const int enough{1'000'000};
        for (int beer = 0; beer != enough; ++beer)
            wall.push(beer);
 
        std::cout.imbue(std::locale("en_US.UTF-8"));
        std::cout << enough << " bottles of beer on the wall...\n";
    } // destroys all the beers
}
```

## See also
- [shared_ptr](/cpp/memory/shared_ptr/)
- [weak_ptr](/cpp/memory/weak_ptr/)
- [std::shared_ptr](/cpp/memory/shared_ptr/)
