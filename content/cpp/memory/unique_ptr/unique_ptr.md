---
title: "std::unique_ptr<T,Deleter>::unique_ptr"
source_path: "cpp/memory/unique_ptr/unique_ptr"
category: "memory"
---

1) Constructs a std::unique_ptr that owns nothing. Value-initializes the stored pointer and the stored deleter. Requires that Deleter is [DefaultConstructible](/cpp/named_req/defaultconstructible/) and that construction does not throw an exception. These overloads participate in overload resolution only if [std::is_default_constructible](/cpp/types/is_default_constructible/)<Deleter>::value is true and Deleter is not a pointer type.

## Declarations
```cpp
members of the primary template, unique_ptr<T>
```

```cpp
constexpr unique_ptr() noexcept;
constexpr unique_ptr( std::nullptr_t ) noexcept;
```

```cpp
explicit unique_ptr( pointer p ) noexcept;
```
_(constexpr since C++23)_

```cpp
unique_ptr( pointer p, /* see below */ d1 ) noexcept;
```
_(constexpr since C++23)_

```cpp
unique_ptr( pointer p, /* see below */ d2 ) noexcept;
```
_(constexpr since C++23)_

```cpp
unique_ptr( unique_ptr&& u ) noexcept;
```
_(constexpr since C++23)_

```cpp
template< class U, class E >
unique_ptr( unique_ptr<U, E>&& u ) noexcept;
```
_(constexpr since C++23)_

```cpp
unique_ptr( const unique_ptr& ) = delete;
```

```cpp
template< class U >
unique_ptr( std::auto_ptr<U>&& u ) noexcept;
```
_(removed in C++17)_

```cpp
members of the specialization for arrays, unique_ptr<T[]>
```

```cpp
constexpr unique_ptr() noexcept;
constexpr unique_ptr( std::nullptr_t ) noexcept;
```

```cpp
template< class U >
explicit unique_ptr( U p ) noexcept;
```
_(constexpr since C++23)_

```cpp
template< class U >
unique_ptr( U p, /* see below */ d1 ) noexcept;
```
_(constexpr since C++23)_

```cpp
template< class U >
unique_ptr( U p, /* see below */ d2 ) noexcept;
```
_(constexpr since C++23)_

```cpp
unique_ptr( unique_ptr&& u ) noexcept;
```
_(constexpr since C++23)_

```cpp
template< class U, class E >
unique_ptr( unique_ptr<U, E>&& u ) noexcept;
```
_(constexpr since C++23)_

```cpp
unique_ptr( const unique_ptr& ) = delete;
```

## Parameters
- `p`: a pointer to an object to manage
- `d1, d2`: a deleter to use to destroy the object
- `u`: another smart pointer to acquire the ownership from

## Notes
Instead of using the overload (2) together with new, it is often a better idea to use [std::make_unique<T>](/cpp/memory/unique_ptr/make_unique/).

[std::unique_ptr](/cpp/memory/unique_ptr/)<Derived> is implicitly convertible to [std::unique_ptr](/cpp/memory/unique_ptr/)<Base> through the overload (6) (because both the managed pointer and [std::default_delete](/cpp/memory/default_delete/) are implicitly convertible).

Because the default constructor is constexpr, static unique_ptrs are initialized as part of [static non-local initialization](/cpp/language/initialization/#Non-local_variables), before any dynamic non-local initialization begins. This makes it safe to use a unique_ptr in a constructor of any static object.

There is no [class template argument deduction](/cpp/language/ctad/) from pointer type because it is impossible to distinguish a pointer obtained from array and non-array forms of new.

## Example
```cpp
#include <iostream>
#include <memory>
 
struct Foo // object to manage
{
    Foo() { std::cout << "Foo ctor\n"; }
    Foo(const Foo&) { std::cout << "Foo copy ctor\n"; }
    Foo(Foo&&) { std::cout << "Foo move ctor\n"; }
    ~Foo() { std::cout << "~Foo dtor\n"; }
};
 
struct D // deleter
{
    D() {};
    D(const D&) { std::cout << "D copy ctor\n"; }
    D(D&) { std::cout << "D non-const copy ctor\n"; }
    D(D&&) { std::cout << "D move ctor \n"; }
    void operator()(Foo* p) const
    {
        std::cout << "D is deleting a Foo\n";
        delete p;
    };
};
 
int main()
{
    std::cout << "Example constructor(1)...\n";
    std::unique_ptr<Foo> up1; // up1 is empty
    std::unique_ptr<Foo> up1b(nullptr); // up1b is empty
 
    std::cout << "Example constructor(2)...\n";
    {
        std::unique_ptr<Foo> up2(new Foo); //up2 now owns a Foo
    } // Foo deleted
 
    std::cout << "Example constructor(3)...\n";
    D d;
    {   // deleter type is not a reference
        std::unique_ptr<Foo, D> up3(new Foo, d); // deleter copied
    }
    {   // deleter type is a reference
        std::unique_ptr<Foo, D&> up3b(new Foo, d); // up3b holds a reference to d
    }
 
    std::cout << "Example constructor(4)...\n";
    {   // deleter is not a reference
        std::unique_ptr<Foo, D> up4(new Foo, D()); // deleter moved
    }
 
    std::cout << "Example constructor(5)...\n";
    {
        std::unique_ptr<Foo> up5a(new Foo);
        std::unique_ptr<Foo> up5b(std::move(up5a)); // ownership transfer
    }
 
    std::cout << "Example constructor(6)...\n";
    {
        std::unique_ptr<Foo, D> up6a(new Foo, d); // D is copied
        std::unique_ptr<Foo, D> up6b(std::move(up6a)); // D is moved
 
        std::unique_ptr<Foo, D&> up6c(new Foo, d); // D is a reference
        std::unique_ptr<Foo, D> up6d(std::move(up6c)); // D is copied
    }
 
#if (__cplusplus < 201703L)
    std::cout << "Example constructor(7)...\n";
    {
        std::auto_ptr<Foo> up7a(new Foo);
        std::unique_ptr<Foo> up7b(std::move(up7a)); // ownership transfer
    }
#endif
 
    std::cout << "Example array constructor...\n";
    {
        std::unique_ptr<Foo[]> up(new Foo[3]);
    } // three Foo objects deleted
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2118 | C++11 | Constructors of unique_ptr<T[]> rejected qualification conversions. | Accept. |
| LWG 2520 | C++11 | unique_ptr<T[]> was accidentally made non-constructible from nullptr_t. | Made constructible. |
| LWG 2801 | C++11 | The default constructor was not constrained. | Constrained. |
| LWG 2899 | C++11 | The move constructor was not constrained. | Constrained. |
| LWG 2905 | C++11 | Constraint on the constructor from a pointer and a deleter was wrong. | Corrected. |
| LWG 2944 | C++11 | Some preconditions were accidentally dropped by LWG 2905 | Restored. |
