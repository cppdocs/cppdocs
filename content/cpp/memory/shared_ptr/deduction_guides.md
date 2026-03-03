---
title: "deduction guides for std::shared_ptr"
source_path: "cpp/memory/shared_ptr/deduction_guides"
header: "<memory>"
category: "memory"
since: "C++17"
---

These [deduction guides](/cpp/language/ctad/) are provided for [std::shared_ptr](/cpp/memory/shared_ptr/) to account for the edge cases missed by the implicit deduction guides.

## Declarations
```cpp
template< class T >
shared_ptr( std::weak_ptr<T> ) -> shared_ptr<T>;
```
_(since C++17)_

```cpp
template< class T, class D >
shared_ptr( std::unique_ptr<T, D> ) -> shared_ptr<T>;
```
_(since C++17)_

## Example
```cpp
#include <memory>
 
int main()
{
    auto p = std::make_shared<int>(42);
    std::weak_ptr w{p};    // explicit deduction guide is used in this case
    std::shared_ptr p2{w}; // explicit deduction guide is used in this case
}
```
