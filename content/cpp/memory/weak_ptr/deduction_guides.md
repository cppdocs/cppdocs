---
title: "deduction guides for std::weak_ptr"
source_path: "cpp/memory/weak_ptr/deduction_guides"
header: "<memory>"
category: "memory"
since: "C++17"
---

One [deduction guide](/cpp/language/ctad/) is provided for [std::weak_ptr](/cpp/memory/weak_ptr/) to account for the edge case missed by the implicit deduction guides.

## Declarations
```cpp
template< class T >
weak_ptr( std::shared_ptr<T> ) -> weak_ptr<T>;
```
_(since C++17)_

## Example
```cpp
#include <memory>
 
int main()
{
    auto p = std::make_shared<int>(42);
    std::weak_ptr w{p}; // explicit deduction guide is used in this case
}
```
