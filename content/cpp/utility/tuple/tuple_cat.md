---
title: "std::tuple_cat"
source_path: "cpp/utility/tuple/tuple_cat"
header: "<tuple>"
category: "utility"
since: "C++23"
---

Constructs a tuple that is a concatenation of all tuples in args. The element types /* CTypes */ of the returned tuple is formed by concatenating the elements type packs of all [std::tuple](/cpp/utility/tuple/)(until C++23)[tuple-like](/cpp/utility/tuple/tuple-like/)(since C++23) types in Tuples in order.

## Declarations
```cpp
template< class... Tuples >
std::tuple</* CTypes */...> tuple_cat( Tuples&&... args );
```
_(since C++11) (until C++14)_

```cpp
template< class... Tuples >
constexpr std::tuple</* CTypes */...> tuple_cat( Tuples&&... args );
```
_(since C++14) (until C++23)_

```cpp
template< tuple-like... Tuples >
constexpr std::tuple</* CTypes */...> tuple_cat( Tuples&&... args );
```
_(since C++23)_

## Parameters
- `args`: zero or more tuples to concatenate

## Return value
A [std::tuple](/cpp/utility/tuple/) object composed of all elements of all argument tuples constructed from std::get<j>([std::forward](/cpp/utility/forward/)<Ti>(arg)) for each individual element.

## Example
```cpp
#include <iostream>
#include <string>
#include <tuple>
 
// helper function to print a tuple of any size
template<class Tuple, std::size_t N>
struct TuplePrinter
{
    static void print(const Tuple& t)
    {
        TuplePrinter<Tuple, N - 1>::print(t);
        std::cout << ", " << std::get<N-1>(t);
    }
};
 
template<class Tuple>
struct TuplePrinter<Tuple, 1>
{
    static void print(const Tuple& t)
    {
        std::cout << std::get<0>(t);
    }
};
 
template<typename... Args, std::enable_if_t<sizeof...(Args) == 0, int> = 0>
void print(const std::tuple<Args...>& t)
{
    std::cout << "()\n";
}
 
template<typename... Args, std::enable_if_t<sizeof...(Args) != 0, int> = 0>
void print(const std::tuple<Args...>& t)
{
    std::cout << "(";
    TuplePrinter<decltype(t), sizeof...(Args)>::print(t);
    std::cout << ")\n";
}
// end helper function
 
int main()
{
    std::tuple<int, std::string, float> t1(10, "Test", 3.14);
    int n = 7;
    auto t2 = std::tuple_cat(t1, std::make_tuple("Foo", "bar"), t1, std::tie(n));
    n = 42;
    print(t2);
}
```

## See also
- [make_tuple](/cpp/utility/tuple/make_tuple/)
- [tie](/cpp/utility/tuple/tie/)
- [tuple](/cpp/utility/tuple/)
- [forward_as_tuple](/cpp/utility/tuple/forward_as_tuple/)
- [forwarding references](/cpp/language/reference/#Forwarding_references)
