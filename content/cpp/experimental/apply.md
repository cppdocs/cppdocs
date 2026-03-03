---
title: "std::experimental::apply"
source_path: "cpp/experimental/apply"
header: "<experimental/tuple>"
category: "experimental"
---

Invoke the [Callable](/cpp/named_req/callable/) object f with a tuple of arguments.

## Declarations
```cpp
template< class F, class Tuple >
constexpr decltype(auto) apply(F&& f, Tuple&& t);
```
_(library fundamentals TS)_

## Parameters
- `f`: Callable object to be invoked
- `t`: tuple whose elements to be used as arguments to f

## Return value
What returned by f.

## Example
```cpp
#include <iostream>
#include <tuple>
 
template<typename... Ts>
void print_tuple(const std::tuple<Ts...> &tuple)
{
    std::apply([](const auto&... elem) 
    {
        ((std::cout << elem << '\n'), ...); 
    }, tuple);
}
 
int main()
{
    const std::tuple<int, char> t = std::make_tuple(5, 'a');
    print_tuple(t);
}
```

## See also
- [make_tuple](/cpp/utility/tuple/make_tuple/)
- [forward_as_tuple](/cpp/utility/tuple/forward_as_tuple/)
- [forwarding references](/cpp/language/reference/#Forwarding_references)
