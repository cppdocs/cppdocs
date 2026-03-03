---
title: "std::shared_ptr<T>::shared_ptr"
source_path: "cpp/memory/shared_ptr/shared_ptr"
category: "memory"
since: "C++20"
---

Constructs new shared_ptr from a variety of pointer types that refer to an object to manage.

## Declarations
```cpp
constexpr shared_ptr() noexcept;
```

```cpp
constexpr shared_ptr( std::nullptr_t ) noexcept;
```

```cpp
template< class Y >
explicit shared_ptr( Y* ptr );
```

```cpp
template< class Y, class Deleter >
shared_ptr( Y* ptr, Deleter d );
```

```cpp
template< class Deleter >
shared_ptr( std::nullptr_t ptr, Deleter d );
```

```cpp
template< class Y, class Deleter, class Alloc >
shared_ptr( Y* ptr, Deleter d, Alloc alloc );
```

```cpp
template< class Deleter, class Alloc >
shared_ptr( std::nullptr_t ptr, Deleter d, Alloc alloc );
```

```cpp
template< class Y >
shared_ptr( const shared_ptr<Y>& r, element_type* ptr ) noexcept;
```

```cpp
template< class Y >
shared_ptr( shared_ptr<Y>&& r, element_type* ptr ) noexcept;
```
_(since C++20)_

```cpp
shared_ptr( const shared_ptr& r ) noexcept;
```

```cpp
template< class Y >
shared_ptr( const shared_ptr<Y>& r ) noexcept;
```

```cpp
shared_ptr( shared_ptr&& r ) noexcept;
```

```cpp
template< class Y >
shared_ptr( shared_ptr<Y>&& r ) noexcept;
```

```cpp
template< class Y >
explicit shared_ptr( const std::weak_ptr<Y>& r );
```

```cpp
template< class Y >
shared_ptr( std::auto_ptr<Y>&& r );
```
_(removed in C++17)_

```cpp
template< class Y, class Deleter >
shared_ptr( std::unique_ptr<Y, Deleter>&& r );
```

## Parameters
- `ptr`: a pointer to an object to manage
- `d`: a deleter to use to destroy the object
- `alloc`: an allocator to use for allocations of data for internal use
- `r`: another smart pointer to share the ownership to or acquire the ownership from

## Notes
A constructor enables shared_from_this with a pointer ptr of type U* means that it determines if U has an unambiguous and accessible(since C++17) base class that is a specialization of [std::enable_shared_from_this](/cpp/memory/enable_shared_from_this/), and if so, the constructor evaluates if (ptr != nullptr && ptr->[weak_this](/cpp/memory/enable_shared_from_this/#weak_this) ﻿.expired())
ptr->[weak_this](/cpp/memory/enable_shared_from_this/#weak_this)= [std::shared_ptr](/cpp/memory/shared_ptr/)<[std::remove_cv_t](/cpp/types/remove_cv/)<U>>
(*this, const_cast<[std::remove_cv_t](/cpp/types/remove_cv/)<U>*>(ptr));.

The assignment to the [weak_this](/cpp/memory/enable_shared_from_this/#weak_this) is not atomic and conflicts with any potentially concurrent access to the same object. This ensures that future calls to [shared_from_this()](/cpp/memory/enable_shared_from_this/shared_from_this/) would share ownership with the [std::shared_ptr](/cpp/memory/shared_ptr/) created by this raw pointer constructor.

The test ptr->[weak_this](/cpp/memory/enable_shared_from_this/#weak_this) ﻿.expired() in the code above makes sure that [weak_this](/cpp/memory/enable_shared_from_this/#weak_this) is not reassigned if it already indicates an owner. This test is required as of C++17.

The raw pointer overloads assume ownership of the pointed-to object. Therefore, constructing a shared_ptr using the raw pointer overload for an object that is already managed by a shared_ptr, such as by shared_ptr(ptr.get()) is likely to lead to undefined behavior, even if the object is of a type derived from [std::enable_shared_from_this](/cpp/memory/enable_shared_from_this/).

Because the default constructor is constexpr, static shared_ptrs are initialized as part of [static non-local initialization](/cpp/language/initialization/#Non-local_variables), before any dynamic non-local initialization begins. This makes it safe to use a shared_ptr in a constructor of any static object.

In C++11 and C++14 it is valid to construct a [std::shared_ptr](/cpp/memory/shared_ptr/)<T> from a [std::unique_ptr](/cpp/memory/unique_ptr/)<T[]>:

Since the shared_ptr obtains its deleter (a [std::default_delete](/cpp/memory/default_delete/)<T[]> object) from the [std::unique_ptr](/cpp/memory/unique_ptr/), the array will be correctly deallocated.

This is no longer allowed in C++17. Instead the array form [std::shared_ptr](/cpp/memory/shared_ptr/)<T[]> should be used.

## Example
```cpp
#include <iostream>
#include <memory>
 
struct Foo
{
    int id{0};
    Foo(int i = 0) : id{i} { std::cout << "Foo::Foo(" << i <<  ")\n"; }
    ~Foo() { std::cout << "Foo::~Foo(), id=" << id << '\n'; }
};
 
struct D
{
    void operator()(Foo* p) const
    {
        std::cout << "Call delete from function object. Foo::id=" << p->id << '\n';
        delete p;
    }
};
 
int main()
{
    {
        std::cout << "1) constructor with no managed object\n";
        std::shared_ptr<Foo> sh1;
    }
 
    {
        std::cout << "2) constructor with object\n";
        std::shared_ptr<Foo> sh2(new Foo{10});
        std::cout << "sh2.use_count(): " << sh2.use_count() << '\n';
        std::shared_ptr<Foo> sh3(sh2);
        std::cout << "sh2.use_count(): " << sh2.use_count() << '\n';
        std::cout << "sh3.use_count(): " << sh3.use_count() << '\n';
    }
 
    {
        std::cout << "3) constructor with object and deleter\n";
        std::shared_ptr<Foo> sh4(new Foo{11}, D());
        std::shared_ptr<Foo> sh5(new Foo{12}, [](auto p)
        {
            std::cout << "Call delete from lambda... p->id=" << p->id << '\n';
            delete p;
        });
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3548 | C++11 | the constructor from unique_ptr copy-constructed the deleter | move-constructs instead |

## See also
- [make_sharedmake_shared_for_overwrite](/cpp/memory/shared_ptr/make_shared/)
- [allocate_sharedallocate_shared_for_overwrite](/cpp/memory/shared_ptr/allocate_shared/)
- [enable_shared_from_this](/cpp/memory/enable_shared_from_this/)
