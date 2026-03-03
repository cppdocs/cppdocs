---
title: "operator==,!=,<,<=,>,>=,<=>(std::basic_string_view)"
source_path: "cpp/string/basic_string_view/operator_cmp"
header: "<string_view>"
category: "string"
since: "C++20"
---

Compares two views.

## Declarations
```cpp
template< class CharT, class Traits >
constexpr bool operator==( std::basic_string_view<CharT,Traits> lhs,
std::basic_string_view<CharT,Traits> rhs ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class CharT, class Traits >
constexpr bool operator==(
std::basic_string_view<CharT,Traits> lhs,
std::type_identity_t<std::basic_string_view<CharT,Traits>> rhs ) noexcept;
```
_(since C++20)_

```cpp
template< class CharT, class Traits >
constexpr bool operator!=( std::basic_string_view<CharT,Traits> lhs,
std::basic_string_view<CharT,Traits> rhs ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class CharT, class Traits >
constexpr bool operator<( std::basic_string_view<CharT,Traits> lhs,
std::basic_string_view<CharT,Traits> rhs ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class CharT, class Traits >
constexpr bool operator<=( std::basic_string_view<CharT,Traits> lhs,
std::basic_string_view<CharT,Traits> rhs ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class CharT, class Traits >
constexpr bool operator>( std::basic_string_view<CharT,Traits> lhs,
std::basic_string_view<CharT,Traits> rhs ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class CharT, class Traits >
constexpr bool operator>=( std::basic_string_view<CharT,Traits> lhs,
std::basic_string_view<CharT,Traits> rhs ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
template< class CharT, class Traits >
constexpr /*comp-cat*/ operator<=>(
std::basic_string_view<CharT,Traits> lhs,
std::type_identity_t<std::basic_string_view<CharT,Traits>> rhs ) noexcept;
```
_(since C++20)_

## Parameters
- `lhs, rhs`: views to compare

## Notes
Sufficient additional overloads can be implemented through non-deduced context in one parameter type.

Three-way comparison result type of [std::string_view](/cpp/string/basic_string_view/), [std::wstring_view](/cpp/string/basic_string_view/), [std::u8string_view](/cpp/string/basic_string_view/), [std::u16string_view](/cpp/string/basic_string_view/) and [std::u32string_view](/cpp/string/basic_string_view/) is std::strong_ordering.

std::type_identity_t is used for non-deduced context, which makes arguments that implicitly convertible to the string view type comparable with the string view.

## Example
```cpp
#include <string_view>
 
int main()
{
    using namespace std::literals;
 
    static_assert(""sv == ""sv);
 
    static_assert(""sv == "", "Selects an additional overload until C++20.");
 
    static_assert("" == ""sv, "Selects an additional overload until C++20."
                              "Uses a rewritten candidate since C++20.");
 
    static_assert(!(""sv != ""sv), "Uses the rewritten candidate since C++20.");
 
    static_assert(!(""sv != ""), "Selects an additional overload until C++20;"
                                 "Uses a rewritten candidate since C++20.");
 
    static_assert(!("" != ""sv), "Selects an additional overload until C++20."
                                 "Uses a rewritten candidate since C++20.");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3432 | C++20 | the return type of operator<=> was not required to be a comparison category type | required |
| LWG 3950 | C++20 | redundant additional overloads were still required | overload sets reduced |
