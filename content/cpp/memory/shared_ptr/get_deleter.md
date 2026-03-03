---
title: "std::get_deleter"
source_path: "cpp/memory/shared_ptr/get_deleter"
header: "<memory>"
category: "memory"
since: "C++11"
---

Access to the p's deleter. If the shared pointer p owns a deleter of type cv-unqualified Deleter (e.g. if it was created with one of the constructors that take a deleter as a parameter), then returns a pointer to the deleter. Otherwise, returns a null pointer.

## Declarations
```cpp
template< class Deleter, class T >
Deleter* get_deleter( const std::shared_ptr<T>& p ) noexcept;
```
_(since C++11)_

## Parameters
- `p`: a shared pointer whose deleter needs to be accessed

## Return value
A pointer to the owned deleter or [nullptr](/cpp/language/nullptr/). The returned pointer is valid at least as long as there remains at least one [shared_ptr](/cpp/memory/shared_ptr/) instance that owns it.

## Notes
The returned pointer may outlive the last [shared_ptr](/cpp/memory/shared_ptr/) if, for example, [std::weak_ptr](/cpp/memory/weak_ptr/)s remain and the implementation doesn't destroy the deleter until the entire control block is destroyed.

## Example
```cpp
#include <iostream>
#include <memory>
 
struct Foo { int i; };
void foo_deleter(Foo* p)
{
    std::cout << "foo_deleter called!\n";
    delete p;
}
 
int main()
{
    std::shared_ptr<int> aptr;
 
    {
        // create a shared_ptr that owns a Foo and a deleter
        auto foo_p = new Foo;
        std::shared_ptr<Foo> r(foo_p, foo_deleter);
        aptr = std::shared_ptr<int>(r, &r->i); // aliasing ctor
        // aptr is now pointing to an int, but managing the whole Foo
    } // r gets destroyed (deleter not called)
 
    // obtain pointer to the deleter:
    if (auto del_p = std::get_deleter<void(*)(Foo*)>(aptr))
    {
        std::cout << "shared_ptr<int> owns a deleter\n";
        if (*del_p == foo_deleter)
            std::cout << "...and it equals &foo_deleter\n";
    }
    else
        std::cout << "The deleter of shared_ptr<int> is null!\n";
} // deleter called here
```

## See also
- [(constructor)](/cpp/memory/shared_ptr/shared_ptr/)
- [std::shared_ptr](/cpp/memory/shared_ptr/)
- [get_deleter](/cpp/memory/unique_ptr/get_deleter/)
