---
title: "std::underlying_type"
source_path: "cpp/types/underlying_type"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If T is a complete enumeration (enum) type, provides a member typedef type that names the underlying type of T.

## Declarations
```cpp
template< class T >
struct underlying_type;
```
_(since C++11)_

## Notes
Each [enumeration type](/cpp/language/enum/) has an underlying type, which can be

## Example
```cpp
#include <iostream>
#include <type_traits>
 
enum e1 {};
enum class e2 {};
enum class e3 : unsigned {};
enum class e4 : int {};
 
int main()
{
    constexpr bool e1_t = std::is_same_v<std::underlying_type_t<e1>, int>;
    constexpr bool e2_t = std::is_same_v<std::underlying_type_t<e2>, int>;
    constexpr bool e3_t = std::is_same_v<std::underlying_type_t<e3>, int>;
    constexpr bool e4_t = std::is_same_v<std::underlying_type_t<e4>, int>;
 
    std::cout
        << "underlying type for 'e1' is " << (e1_t ? "int" : "non-int") << '\n'
        << "underlying type for 'e2' is " << (e2_t ? "int" : "non-int") << '\n'
        << "underlying type for 'e3' is " << (e3_t ? "int" : "non-int") << '\n'
        << "underlying type for 'e4' is " << (e4_t ? "int" : "non-int") << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2396 | C++11 | incomplete enumeration types were allowed | complete enumeration type required |

## See also
- [is_enum](/cpp/types/is_enum/)
- [is_scoped_enum](/cpp/types/is_scoped_enum/)
- [to_underlying](/cpp/utility/to_underlying/)
