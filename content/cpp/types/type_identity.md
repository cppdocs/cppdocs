---
title: "std::type_identity"
source_path: "cpp/types/type_identity"
header: "<type_traits>"
category: "types"
since: "C++20"
---

Provides the member typedef type that names T (i.e., the identity transformation).

## Declarations
```cpp
template< class T >
struct type_identity;
```
_(since C++20)_

## Notes
std::type_identity can be used to establish [non-deduced contexts](/cpp/language/template_argument_deduction/#Non-deduced_contexts) in template argument deduction.

## Example
```cpp
#include <iostream>
#include <type_traits>
 
template<class T>
T foo(T a, T b) { return a + b; }
 
template<class T>
T bar(T a, std::type_identity_t<T> b) { return a + b; }
 
int main()
{
    // foo(4.2, 1); // error, deduced conflicting types for 'T'
    std::cout << bar(4.2, 1) << '\n';  // OK, calls bar<double>
}
```

## See also
- [identity](/cpp/utility/functional/identity/)
