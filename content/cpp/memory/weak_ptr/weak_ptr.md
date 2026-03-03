---
title: "std::weak_ptr<T>::weak_ptr"
source_path: "cpp/memory/weak_ptr/weak_ptr"
category: "memory"
since: "C++11"
---

Constructs new weak_ptr that potentially shares an object with r.

## Declarations
```cpp
constexpr weak_ptr() noexcept;
```
_(since C++11)_

```cpp
weak_ptr( const weak_ptr& r ) noexcept;
```
_(since C++11)_

```cpp
template< class Y >
weak_ptr( const weak_ptr<Y>& r ) noexcept;
```
_(since C++11)_

```cpp
template< class Y >
weak_ptr( const std::shared_ptr<Y>& r ) noexcept;
```
_(since C++11)_

```cpp
weak_ptr( weak_ptr&& r ) noexcept;
```
_(since C++11)_

```cpp
template< class Y >
weak_ptr( weak_ptr<Y>&& r ) noexcept;
```
_(since C++11)_

## Parameters
- `r`: a std::shared_ptr or std::weak_ptr that will be viewed by this std::weak_ptr

## Notes
Because the default constructor is constexpr, static [std::weak_ptr](/cpp/memory/weak_ptr/)s are initialized as part of [static non-local initialization](/cpp/language/initialization/#Non-local_variables), before any dynamic non-local initialization begins. This makes it safe to use a [std::weak_ptr](/cpp/memory/weak_ptr/) in a constructor of any static object.

## Example
```cpp
#include <iostream>
#include <memory>
 
struct Foo {};
 
int main()
{
    std::weak_ptr<Foo> w_ptr;
 
    {
        auto ptr = std::make_shared<Foo>();
        w_ptr = ptr;
        std::cout << "w_ptr.use_count() inside scope: " << w_ptr.use_count() << '\n';
    }
 
    std::cout << "w_ptr.use_count() out of scope: " << w_ptr.use_count() << '\n';
    std::cout << "w_ptr.expired() out of scope: "
              << std::boolalpha << w_ptr.expired() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2315 | C++11 | move semantic was not enabled for weak_ptr | enabled |

## See also
- [operator=](/cpp/memory/weak_ptr/operator/)
