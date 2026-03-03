---
title: "std::tuple<Types...>::tuple"
source_path: "cpp/utility/tuple/tuple"
header: "<tuple>"
category: "utility"
since: "C++11"
---

Constructs a new tuple.

## Declarations
```cpp
constexpr tuple();
```
_(since C++11) (conditionally explicit)_

```cpp
tuple( const Types&... args );
```
_(since C++11) (constexpr since C++14)(conditionally explicit)_

```cpp
template< class... UTypes >
tuple( UTypes&&... args );
```
_(since C++11) (constexpr since C++14)(conditionally explicit)_

```cpp
template< class... UTypes >
constexpr tuple( tuple<UTypes...>& other );
```
_(since C++23) (conditionally explicit)_

```cpp
template< class... UTypes >
tuple( const tuple<UTypes...>& other );
```
_(since C++11) (constexpr since C++14)(conditionally explicit)_

```cpp
template< class... UTypes >
tuple( tuple<UTypes...>&& other );
```
_(since C++11) (constexpr since C++14)(conditionally explicit)_

```cpp
template< class... UTypes >
constexpr tuple( const tuple<UTypes...>&& other );
```
_(since C++23) (conditionally explicit)_

```cpp
template< class U1, class U2 >
constexpr tuple( std::pair<U1, U2>& p );
```
_(since C++23) (conditionally explicit)_

```cpp
template< class U1, class U2 >
tuple( const std::pair<U1, U2>& p );
```
_(since C++11) (constexpr since C++14)(conditionally explicit)_

```cpp
template< class U1, class U2 >
tuple( std::pair<U1, U2>&& p );
```
_(since C++11) (constexpr since C++14)(conditionally explicit)_

```cpp
template< class U1, class U2 >
constexpr tuple( const std::pair<U1, U2>&& p );
```
_(since C++23) (conditionally explicit)_

```cpp
template< tuple-like UTuple >
constexpr tuple( UTuple&& u );
```
_(since C++23) (conditionally explicit)_

```cpp
tuple( const tuple& other ) = default;
```
_(since C++11)_

```cpp
tuple( tuple&& other ) = default;
```
_(since C++11)_

```cpp
Allocator-extended constructors
```

```cpp
template< class Alloc >
tuple( std::allocator_arg_t, const Alloc& a );
```
_(since C++11) (constexpr since C++20)(conditionally explicit)_

```cpp
template< class Alloc >
tuple( std::allocator_arg_t, const Alloc& a,
const Types&... args );
```
_(since C++11) (constexpr since C++20)(conditionally explicit)_

```cpp
template< class Alloc, class... UTypes >
tuple( std::allocator_arg_t, const Alloc& a,
UTypes&&... args );
```
_(since C++11) (constexpr since C++20)(conditionally explicit)_

```cpp
template< class Alloc, class... UTypes >
constexpr tuple( std::allocator_arg_t, const Alloc& a,
tuple<UTypes...>& other );
```
_(since C++23) (conditionally explicit)_

```cpp
template< class Alloc, class... UTypes >
tuple( std::allocator_arg_t, const Alloc& a,
const tuple<UTypes...>& other );
```
_(since C++11) (constexpr since C++20)(conditionally explicit)_

```cpp
template< class Alloc, class... UTypes >
tuple( std::allocator_arg_t, const Alloc& a,
tuple<UTypes...>&& other );
```
_(since C++11) (constexpr since C++20)(conditionally explicit)_

```cpp
template< class Alloc, class... UTypes >
constexpr tuple( std::allocator_arg_t, const Alloc& a,
const tuple<UTypes...>&& other );
```
_(since C++23) (conditionally explicit)_

```cpp
template< class Alloc, class U1, class U2 >
constexpr tuple( std::allocator_arg_t, const Alloc& a,
std::pair<U1, U2>& p );
```
_(since C++23) (conditionally explicit)_

```cpp
template< class Alloc, class U1, class U2 >
tuple( std::allocator_arg_t, const Alloc& a,
const std::pair<U1, U2>& p );
```
_(since C++11) (constexpr since C++20)(conditionally explicit)_

```cpp
template< class Alloc, class U1, class U2 >
tuple( std::allocator_arg_t, const Alloc& a,
std::pair<U1, U2>&& p );
```
_(since C++11) (constexpr since C++20)(conditionally explicit)_

```cpp
template< class Alloc, class U1, class U2 >
constexpr tuple( std::allocator_arg_t, const Alloc& a,
const std::pair<U1, U2>&& p );
```
_(since C++23) (conditionally explicit)_

```cpp
template< class Alloc, tuple-like UTuple >
constexpr tuple( std::allocator_arg_t, const Alloc& a, UTuple&& u );
```
_(since C++23) (conditionally explicit)_

```cpp
template< class Alloc >
tuple( std::allocator_arg_t, const Alloc& a,
const tuple& other );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class Alloc >
tuple( std::allocator_arg_t, const Alloc& a,
tuple&& other );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `args`: values used to initialize each element of the tuple
- `other`: the tuple of values used to initialize each element of the tuple
- `p`: the pair of values used to initialize both elements of the 2-tuple
- `u`: the tuple-like object of values used to initialize each element of the tuple
- `a`: the allocator to use in uses-allocator construction

## Notes
Conditionally-explicit constructors make it possible to construct a tuple in copy-initialization context using list-initialization syntax:

Note that if some element of the list is not implicitly convertible to the corresponding element of the target tuple, the constructors become explicit:

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <memory>
#include <string>
#include <string_view>
#include <tuple>
#include <type_traits>
#include <vector>
 
// helper function to print a vector to a stream
template<class Os, class T>
Os& operator<<(Os& os, std::vector<T> const& v)
{
    os << '{';
    for (auto i{v.size()}; const T& e : v)
        os << e << (--i ? "," : "");
    return os << '}';
}
 
template<class T>
void print_single(T const& v)
{
    if constexpr (std::is_same_v<T, std::decay_t<std::string>>)
        std::cout << std::quoted(v);
    else if constexpr (std::is_same_v<std::decay_t<T>, char>)
        std::cout << "'" << v << "'";
    else
        std::cout << v;
}
 
// helper function to print a tuple of any size
template<class Tuple, std::size_t N>
struct TuplePrinter
{
    static void print(const Tuple& t)
    {
        TuplePrinter<Tuple, N - 1>::print(t);
        std::cout << ", ";
        print_single(std::get<N - 1>(t));
    }
};
 
template<class Tuple>
struct TuplePrinter<Tuple, 1>
{
    static void print(const Tuple& t)
    {
        print_single(std::get<0>(t));
    }
};
 
template<class... Args>
void print(std::string_view message, const std::tuple<Args...>& t)
{
    std::cout << message << " (";
    TuplePrinter<decltype(t), sizeof...(Args)>::print(t);
    std::cout << ")\n";
}
// end helper function
 
int main()
{
    std::tuple<int, std::string, double> t1;
    print("Value-initialized, t1:", t1);
 
    std::tuple<int, std::string, double> t2{42, "Test", -3.14};
    print("Initialized with values, t2:", t2);
 
    std::tuple<char, std::string, int> t3{t2};
    print("Implicitly converted, t3:", t3);
 
    std::tuple<int, double> t4{std::make_pair(42, 3.14)};
    print("Constructed from a pair, t4:", t4);
 
    // given Allocator my_alloc with a single-argument constructor
    // my_alloc(int); use my_alloc(1) to allocate 5 ints in a vector
    using my_alloc = std::allocator<int>;
    std::vector<int, my_alloc> v{5, 1, my_alloc{/* 1 */}};
 
    // use my_alloc(2) to allocate 5 ints in a vector in a tuple
    std::tuple<int, std::vector<int, my_alloc>, double> t5
        {std::allocator_arg, my_alloc{/* 2 */}, 42, v, -3.14};
    print("Constructed with allocator, t5:", t5);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2510 | C++11 | default constructor was implicit | made conditionally-explicit |
| LWG 3121 | C++11 | constructor of 1-tuple might recursively check the constraints;allocator_arg_t argument brought ambiguity | furtherly constrainedthe constructor |
| LWG 3158 | C++11 | the uses-allocator constructor correspondingto default constructor was implicit | made conditionally-explicit |
| LWG 3211 | C++11 | whether the default constructor oftuple<> is trivial was unspecified | require to be trivial |
| LWG 4045 | C++23 | tuple-like constructor may potentially create dangling references | made defined as deleted |
| N4387 | C++11 | some constructors were explicit, preventing useful behavior | most constructors madeconditionally-explicit |

## See also
- [operator=](/cpp/utility/tuple/operator/)
- [make_tuple](/cpp/utility/tuple/make_tuple/)
- [tie](/cpp/utility/tuple/tie/)
- [tuple](/cpp/utility/tuple/)
- [forward_as_tuple](/cpp/utility/tuple/forward_as_tuple/)
- [forwarding references](/cpp/language/reference/#Forwarding_references)
- [(constructor)](/cpp/utility/pair/pair/)
