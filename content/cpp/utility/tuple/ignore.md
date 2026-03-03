---
title: "std::ignore"
source_path: "cpp/utility/tuple/ignore"
header: "<tuple>"
category: "utility"
---

1) An object such that any value can be assigned to it with no effect.

## Declarations
```cpp
const /*ignore-type*/ ignore;
```
_(since C++11) (until C++14)_

```cpp
constexpr /*ignore-type*/ ignore;
```
_(since C++14) (inline since c++17)_

```cpp
struct /*ignore-type*/
{
template< class T >
const /*ignore-type*/& operator=( const T& ) const noexcept
{
return *this;
}
};
```
_(since C++11) (until C++14) (exposition only*)_

```cpp
struct /*ignore-type*/
{
template< class T >
constexpr const /*ignore-type*/& operator=( const T& ) const noexcept
{
return *this;
}
};
```
_(since C++14) (exposition only*)_

## Notes
A void expression or a volatile bit-field value cannot be assigned to std::ignore.

std::ignore is intended for use with [std::tie](/cpp/utility/tuple/tie/) when unpacking a [std::tuple](/cpp/utility/tuple/), as a placeholder for the arguments that are not used, but can be used for any unwanted assignment.

Some code guides recommend using std::ignore to avoid warnings from unused return values of [[[nodiscard](/cpp/language/attributes/nodiscard/)]] functions, even though an assignment isn't required.

For ignoring values not requiring assignment, one may cast to void. For variables that have names, but whose value is unused, one may cast those to void or declare those variables with [[[maybe_unused](/cpp/language/attributes/maybe_unused/)]].

## Example
```cpp
#include <iostream>
#include <set>
#include <string>
#include <tuple>
 
[[nodiscard]] int dontIgnoreMe()
{
    return 42;
}
 
int main()
{
    std::ignore = dontIgnoreMe();
 
    std::set<std::string> set_of_str;
    if (bool inserted{false};
        std::tie(std::ignore, inserted) = set_of_str.insert("Test"),
        inserted)
        std::cout << "Value was inserted successfully.\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2773 | C++14 | std::tuple was made constexpr but std::ignore was not yet | made constexpr |
| P2968R2 | C++11 | the behavior of std::ignore outside of std::tie was not formally specified | made fully specified |

## See also
- [tie](/cpp/utility/tuple/tie/)
- [tuple](/cpp/utility/tuple/)
