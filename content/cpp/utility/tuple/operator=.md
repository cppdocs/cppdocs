---
title: "std::tuple<Types...>::operator="
source_path: "cpp/utility/tuple/operator"
category: "utility"
since: "C++23"
---

Replaces the contents of the tuple with the contents of another tuple-like object.

## Declarations
```cpp
tuple& operator=( const tuple& other );
```
_(since C++11) (constexpr since C++20)_

```cpp
constexpr const tuple& operator=( const tuple& other ) const;
```
_(since C++23)_

```cpp
tuple& operator=( tuple&& other ) noexcept(/* see below */);
```
_(since C++11) (constexpr since C++20)_

```cpp
constexpr const tuple& operator=( tuple&& other ) const;
```
_(since C++23)_

```cpp
template< class... UTypes >
tuple& operator=( const tuple<UTypes...>& other );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class... UTypes >
constexpr const tuple& operator=( const tuple<UTypes...>& other ) const;
```
_(since C++23)_

```cpp
template< class... UTypes >
tuple& operator=( tuple<UTypes...>&& other );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class... UTypes >
constexpr const tuple& operator=( tuple<UTypes...>&& other ) const;
```
_(since C++23)_

```cpp
template< class E1, class E2 >
tuple& operator=( const std::pair<E1, E2>& p );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class E1, class E2 >
constexpr const tuple& operator=( const std::pair<E1, E2>& p ) const;
```
_(since C++23)_

```cpp
template< class E1, class E2 >
tuple& operator=( std::pair<E1, E2>&& p );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class E1, class E2 >
constexpr const tuple& operator=( std::pair<E1, E2>&& p ) const;
```
_(since C++23)_

```cpp
template< tuple-like UTuple >
constexpr tuple& operator=( UTuple&& u );
```
_(since C++23)_

```cpp
template< tuple-like UTuple >
constexpr const tuple& operator=( UTuple&& u ) const;
```
_(since C++23)_

## Parameters
- `other`: tuple to replace the contents of this tuple
- `p`: pair to replace the contents of this 2-tuple
- `u`: tuple-like object to replace the contents of this tuple

## Return value
*this

## Example
```cpp
#include <iostream>
#include <string>
#include <string_view>
#include <tuple>
#include <utility>
#include <vector>
 
// helper function to print std::vector<int>
std::ostream& operator<<(std::ostream& os, std::vector<int> const& v)
{
    os << '{';
    for (std::size_t t = 0; t != v.size(); ++t)
        os << v[t] << (t + 1 < v.size() ? ", " : "");
    return os << '}';
}
 
// helpers to print a tuple of any size
template<class... Args>
void print_tuple(std::string_view name, const std::tuple<Args...>& t)
{
    std::cout << name << " = {";
    std::apply([&](auto&& arg, auto&&... args)
    {
        std::cout << arg;
        ((std::cout << ", " << args), ...);
    }, t);
    std::cout << '}';
}
 
template<class Tuple1, class Tuple2>
void print_tuples(std::string_view name1, const Tuple1& t1,
                  std::string_view name2, const Tuple2& t2)
{
    print_tuple(name1, t1);
    std::cout << ", ";
    print_tuple(name2, std::tuple(t2));
    std::cout << "\n\n";
}
 
int main()
{
    // Tuple to tuple examples //
    std::tuple<int, std::string, std::vector<int>>
        t1{1, "alpha", {1, 2, 3}},
        t2{2, "beta", {4, 5}};
    print_tuples("1) t1", t1, "t2", t2);
 
    // Normal copy assignment
    // operator=( const tuple& other );
    t1 = t2;
    print_tuples("2) t1 = t2;\n   t1", t1, "t2", t2);
 
    // Normal move assignment
    // operator=( tuple&& other );
    t1 = std::move(t2);
    print_tuples("3) t1 = std::move(t2);\n   t1", t1, "t2", t2);
 
    // Converting copy assignment
    // operator=( const tuple<UTypes...>& other );
    std::tuple<short, const char*, std::vector<int>> t3{3, "gamma", {6, 7, 8}};
    t1 = t3;
    print_tuples("4) t1 = t3;\n   t1", t1, "t3", t3);
 
    // Converting move assignment
    // operator=( tuple<UTypes...>&& other );
    t1 = std::move(t3);
    print_tuples("5) t1 = std::move(t3);\n   t1", t1, "t3", t3);
 
    // Pair to tuple examples //
    std::tuple<std::string, std::vector<int>> t4{"delta", {10, 11, 12}};
    std::pair<const char*, std::vector<int>> p1{"epsilon", {14, 15, 16}};
    print_tuples("6) t4", t4, "p1", p1);
 
    // Converting copy assignment from std::pair
    // operator=( const std::pair<U1, U2>& p );
    t4 = p1;
    print_tuples("7) t4 = p1;\n   t4", t4, "p1", p1);
 
    // Converting move assignment from std::pair
    // operator=( std::pair<U1, U2>&& p );
    t4 = std::move(p1);
    print_tuples("8) t4 = std::move(p1);\n   t4", t4, "p1", p1);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2729 | C++11 | operator= was unconstrained and mightresult in unnecessary undefined behavior | constrained |

## See also
- [(constructor)](/cpp/utility/tuple/tuple/)
- [operator=](/cpp/utility/pair/operator/)
