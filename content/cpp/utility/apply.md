---
title: "std::apply"
source_path: "cpp/utility/apply"
header: "<tuple>"
category: "utility"
since: "C++23"
---

Invoke the [Callable](/cpp/named_req/callable/) object f with the elements of t as arguments.

## Declarations
```cpp
template< class F, class Tuple >
constexpr decltype(auto) apply( F&& f, Tuple&& t );
```
_(since C++17) (until C++23)_

```cpp
template< class F, tuple-like Tuple >
constexpr decltype(auto) apply( F&& f, Tuple&& t ) noexcept(/* see below */);
```
_(since C++23)_

## Parameters
- `f`: Callable object to be invoked
- `t`: tuple whose elements to be used as arguments to f

## Return value
The value returned by f.

## Notes
Tuple need not be [std::tuple](/cpp/utility/tuple/), and instead may be anything that supports [std::get](/cpp/utility/tuple/get/) and [std::tuple_size](/cpp/utility/tuple_size/); in particular, [std::array](/cpp/container/array/) and [std::pair](/cpp/utility/pair/) may be used.

Tuple is constrained to be tuple-like, i.e. each type therein is required to be a specialization of [std::tuple](/cpp/utility/tuple/) or another type (such as [std::array](/cpp/container/array/) and [std::pair](/cpp/utility/pair/)) that models [tuple-like](/cpp/utility/tuple/tuple-like/).

## Example
```cpp
#include <iostream>
#include <tuple>
#include <utility>
 
int add(int first, int second) { return first + second; }
 
template<typename T>
T add_generic(T first, T second) { return first + second; }
 
auto add_lambda = [](auto first, auto second) { return first + second; };
 
template<typename... Ts>
std::ostream& operator<<(std::ostream& os, std::tuple<Ts...> const& theTuple)
{
    std::apply
    (
        [&os](Ts const&... tupleArgs)
        {
            os << '[';
            std::size_t n{0};
            ((os << tupleArgs << (++n != sizeof...(Ts) ? ", " : "")), ...);
            os << ']';
        }, theTuple
    );
    return os;
}
 
int main()
{
    // OK
    std::cout << std::apply(add, std::pair(1, 2)) << '\n';
 
    // Error: can't deduce the function type
    // std::cout << std::apply(add_generic, std::make_pair(2.0f, 3.0f)) << '\n'; 
 
    // OK
    std::cout << std::apply(add_lambda, std::pair(2.0f, 3.0f)) << '\n'; 
 
    // advanced example
    std::tuple myTuple{25, "Hello", 9.31f, 'c'};
    std::cout << myTuple << '\n';
}
```

## See also
- [make_tuple](/cpp/utility/tuple/make_tuple/)
- [forward_as_tuple](/cpp/utility/tuple/forward_as_tuple/)
- [forwarding references](/cpp/language/reference/#Forwarding_references)
- [make_from_tuple](/cpp/utility/make_from_tuple/)
- [invokeinvoke_r](/cpp/utility/functional/invoke/)
- [Callable](/cpp/named_req/callable/)
