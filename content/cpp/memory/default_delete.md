---
title: "std::default_delete"
source_path: "cpp/memory/default_delete"
header: "<memory>"
category: "memory"
since: "C++11"
---

std::default_delete is the default destruction policy used by [std::unique_ptr](/cpp/memory/unique_ptr/) when no deleter is specified. Specializations of default_delete are empty classes on typical implementations, and used in the [empty base class optimization](/cpp/language/ebo/).

## Declarations
```cpp
template< class T > struct default_delete;
```
_(since C++11)_

```cpp
template< class T > struct default_delete<T[]>;
```
_(since C++11)_

## Parameters
- `d`: a deleter to copy from

## Notes
The [converting constructor](/cpp/language/converting_constructor/) template of std::default_delete makes possible the implicit conversion from [std::unique_ptr](/cpp/memory/unique_ptr/)<Derived> to [std::unique_ptr](/cpp/memory/unique_ptr/)<Base>.

## Example
```cpp
#include <algorithm>
#include <memory>
#include <vector>
 
int main()
{
//  {
//      std::shared_ptr<int> shared_bad(new int[10]);
//  } // the destructor calls delete, undefined behavior
 
    {
        std::shared_ptr<int> shared_good(new int[10], std::default_delete<int[]>());
    } // OK: the destructor calls delete[]
 
    {
        std::unique_ptr<int> ptr(new int(5));
    } // unique_ptr<int> uses default_delete<int>
 
    {
        std::unique_ptr<int[]> ptr(new int[10]);
    } // unique_ptr<int[]> uses default_delete<int[]>
 
    // default_delete can be used anywhere a delete functor is needed
    std::vector<int*> v;
    for (int n = 0; n < 100; ++n)
        v.push_back(new int(n));
    std::for_each(v.begin(), v.end(), std::default_delete<int>());
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2118 | C++11 | member functions of the array specializations rejected qualification conversions | accept |

## See also
- [unique_ptr](/cpp/memory/unique_ptr/)
