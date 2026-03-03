---
title: "operator==, !=, <, <=, >, >=, <=>(std::variant)"
source_path: "cpp/utility/variant/operator_cmp"
header: "<variant>"
category: "utility"
since: "C++17"
---

Performs comparison operations on [std::variant](/cpp/utility/variant/) objects.

## Declarations
```cpp
template< class... Types >
constexpr bool operator==( const std::variant<Types...>& lhs,
const std::variant<Types...>& rhs );
```
_(since C++17)_

```cpp
template< class... Types >
constexpr bool operator!=( const std::variant<Types...>& lhs,
const std::variant<Types...>& rhs );
```
_(since C++17)_

```cpp
template< class... Types >
constexpr bool operator<( const std::variant<Types...>& lhs,
const std::variant<Types...>& rhs );
```
_(since C++17)_

```cpp
template< class... Types >
constexpr bool operator>( const std::variant<Types...>& lhs,
const std::variant<Types...>& rhs );
```
_(since C++17)_

```cpp
template< class... Types >
constexpr bool operator<=( const std::variant<Types...>& lhs,
const std::variant<Types...>& rhs );
```
_(since C++17)_

```cpp
template< class... Types >
constexpr bool operator>=( const std::variant<Types...>& lhs,
const std::variant<Types...>& rhs );
```
_(since C++17)_

```cpp
template< class... Types >
constexpr std::common_comparison_category_t
<std::compare_three_way_result_t<Types>...>
operator<=>( const std::variant<Types...>& lhs,
const std::variant<Types...>& rhs );
```
_(since C++20)_

```cpp
Helper function template
```

```cpp
template< std::size_t I, class... Types >
constexpr const std::variant_alternative_t<I, std::variant<Types...>>&
GET( const variant<Types...>& v );
```
_(exposition only*)_

## Parameters
- `lhs,rhs`: variants to compare

## Return value
For operator<=>:

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_constrained_equality
202403L
(C++26)
constrained comparison operators for std::variant

## Example
```cpp
#include <iostream>
#include <string>
#include <variant>
 
int main()
{
    std::cout << std::boolalpha;
    std::string cmp;
    bool result;
 
    auto print2 = [&cmp, &result](const auto& lhs, const auto& rhs)
    {
        std::cout << lhs << ' ' << cmp << ' ' << rhs << " : " << result << '\n';
    };
 
    std::variant<int, std::string> v1, v2;
 
    std::cout << "operator==\n";
    {
        cmp = "==";
 
        // by default v1 = 0, v2 = 0;
        result = v1 == v2; // true
        std::visit(print2, v1, v2);
 
        v1 = v2 = 1;
        result = v1 == v2; // true
        std::visit(print2, v1, v2);
 
        v2 = 2;
        result = v1 == v2; // false
        std::visit(print2, v1, v2);
 
        v1 = "A";
        result = v1 == v2; // false: v1.index == 1, v2.index == 0
        std::visit(print2, v1, v2);
 
        v2 = "B";
        result = v1 == v2; // false
        std::visit(print2, v1, v2);
 
        v2 = "A";
        result = v1 == v2; // true
        std::visit(print2, v1, v2);
    }
 
    std::cout << "operator<\n";
    {
        cmp = "<";
 
        v1 = v2 = 1;
        result = v1 < v2; // false
        std::visit(print2, v1, v2);
 
        v2 = 2;
        result = v1 < v2; // true
        std::visit(print2, v1, v2);
 
        v1 = 3;
        result = v1 < v2; // false
        std::visit(print2, v1, v2);
 
        v1 = "A"; v2 = 1;
        result = v1 < v2; // false: v1.index == 1, v2.index == 0
        std::visit(print2, v1, v2);
 
        v1 = 1; v2 = "A";
        result = v1 < v2; // true: v1.index == 0, v2.index == 1
        std::visit(print2, v1, v2);
 
        v1 = v2 = "A";
        result = v1 < v2; // false
        std::visit(print2, v1, v2);
 
        v2 = "B";
        result = v1 < v2; // true
        std::visit(print2, v1, v2);
 
        v1 = "C";
        result = v1 < v2; // false
        std::visit(print2, v1, v2);
    }
 
    {
        std::variant<int, std::string> v1;
        std::variant<std::string, int> v2;
    //  v1 == v2; // Compilation error: no known conversion
    }
 
    // TODO: C++20 three-way comparison operator <=> for variants
}
```

## See also
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/utility/optional/operator_cmp/)
