---
title: "std::reference_converts_from_temporary"
source_path: "cpp/types/reference_converts_from_temporary"
header: "<type_traits>"
category: "types"
since: "C++23"
---

Let V be [std::remove_cv_t](/cpp/types/remove_cv/)<U> if U is a scalar type or cv ﻿ void, or U otherwise. If T is a reference type, and given a hypothetical expression e such that decltype(e) is V, the variable definition T ref = e; is well-formed and [binds a temporary object](/cpp/language/reference_initialization/#Lifetime_of_a_temporary) to ref, then provides the member constant value equal to true. Otherwise, value is false.

## Declarations
```cpp
template< class T, class U >
struct reference_converts_from_temporary;
```
_(since C++23)_

## Notes
std::reference_converts_from_temporary can be used for rejecting some cases that always produce dangling references.

## Example
```cpp
#include <type_traits>
 
int main() {}
 
static_assert(
    std::reference_converts_from_temporary_v<int&&, int> == true &&
    std::reference_converts_from_temporary_v<const int&, int> == true &&
    std::reference_converts_from_temporary_v<int&&, int&&> == false &&
    std::reference_converts_from_temporary_v<const int&, int&&> == false &&
    std::reference_converts_from_temporary_v<int&&, long&&> == true &&
    std::reference_converts_from_temporary_v<int&&, long> == true);
```

## See also
- [is_convertibleis_nothrow_convertible](/cpp/types/is_convertible/)
- [invokeinvoke_r](/cpp/utility/functional/invoke/)
- [Callable](/cpp/named_req/callable/)
- [bind](/cpp/utility/functional/bind/)
- [visit](/cpp/utility/variant/visit2/)
- [(constructor)](/cpp/utility/functional/function/function/)
- [(constructor)](/cpp/utility/functional/move_only_function/move_only_function/)
- [(constructor)](/cpp/thread/packaged_task/packaged_task/)
