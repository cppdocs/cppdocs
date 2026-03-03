---
title: "std::shared_ptr<T>::reset"
source_path: "cpp/memory/shared_ptr/reset"
category: "memory"
since: "C++11"
---

Replaces the managed object with an object pointed to by ptr. Optional deleter d can be supplied, which is later used to destroy the new object when no shared_ptr objects own it. By default, [delete](/cpp/language/delete/) expression is used as deleter. Proper [delete](/cpp/language/delete/) expression corresponding to the supplied type is always selected, this is the reason why the function is implemented as template using a separate parameter Y.

## Declarations
```cpp
void reset() noexcept;
```
_(since C++11)_

```cpp
template< class Y >
void reset( Y* ptr );
```
_(since C++11)_

```cpp
template< class Y, class Deleter >
void reset( Y* ptr, Deleter d );
```
_(since C++11)_

```cpp
template< class Y, class Deleter, class Alloc >
void reset( Y* ptr, Deleter d, Alloc alloc );
```
_(since C++11)_

## Parameters
- `ptr`: pointer to an object to acquire ownership of
- `d`: deleter to store for deletion of the object
- `alloc`: allocator to use for internal allocations

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <memory>
 
struct Foo
{
    Foo(int n = 0) noexcept : bar(n)
    {
        std::cout << "Foo::Foo(), bar = " << bar << " @ " << this << '\n';
    }
    ~Foo()
    {
        std::cout << "Foo::~Foo(), bar = " << bar << " @ " << this << '\n';
    }
    int getBar() const noexcept { return bar; }
private:
    int bar;
};
 
int main()
{
    std::cout << "1) unique ownership\n";
    {
        std::shared_ptr<Foo> sptr = std::make_shared<Foo>(100);
 
        std::cout << "Foo::bar = " << sptr->getBar() << ", use_count() = "
                  << sptr.use_count() << '\n';
 
        // Reset the shared_ptr without handing it a fresh instance of Foo.
        // The old instance will be destroyed after this call.
        std::cout << "call sptr.reset()...\n";
        sptr.reset(); // calls Foo's destructor here
        std::cout << "After reset(): use_count() = " << sptr.use_count()
                  << ", sptr = " << sptr << '\n';
    }   // No call to Foo's destructor, it was done earlier in reset().
 
    std::cout << "\n2) unique ownership\n";
    {
        std::shared_ptr<Foo> sptr = std::make_shared<Foo>(200);
 
        std::cout << "Foo::bar = " << sptr->getBar() << ", use_count() = "
                  << sptr.use_count() << '\n';
 
        // Reset the shared_ptr, hand it a fresh instance of Foo.
        // The old instance will be destroyed after this call.
        std::cout << "call sptr.reset()...\n";
        sptr.reset(new Foo{222});
        std::cout << "After reset(): use_count() = " << sptr.use_count()
                  << ", sptr = " << sptr << "\nLeaving the scope...\n";
    }   // Calls Foo's destructor.
 
    std::cout << "\n3) multiple ownership\n";
    {
        std::shared_ptr<Foo> sptr1 = std::make_shared<Foo>(300);
        std::shared_ptr<Foo> sptr2 = sptr1;
        std::shared_ptr<Foo> sptr3 = sptr2;
 
        std::cout << "Foo::bar = " << sptr1->getBar() << ", use_count() = "
                  << sptr1.use_count() << '\n';
 
        // Reset the shared_ptr sptr1, hand it a fresh instance of Foo.
        // The old instance will stay shared between sptr2 and sptr3.
        std::cout << "call sptr1.reset()...\n";
        sptr1.reset(new Foo{333});
 
        std::cout << "After reset():\n"
                  << "sptr1.use_count() = " << sptr1.use_count()
                  << ", sptr1 @ " << sptr1 << '\n'
                  << "sptr2.use_count() = " << sptr2.use_count()
                  << ", sptr2 @ " << sptr2 << '\n'
                  << "sptr3.use_count() = " << sptr3.use_count()
                  << ", sptr3 @ " << sptr3 << '\n'
                  << "Leaving the scope...\n";
    }   // Calls two destructors of: 1) Foo owned by sptr1,
        // 2) Foo shared between sptr2/sptr3.
}
```

## See also
- [(constructor)](/cpp/memory/shared_ptr/shared_ptr/)
