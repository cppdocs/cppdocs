---
title: "std::pair<T1,T2>::pair"
source_path: "cpp/utility/pair/pair"
category: "utility"
since: "C++11"
---

Constructs a new pair.

## Declarations
```cpp
pair();
```
_(constexpr since C++11) (conditionally explicit since C++11)_

```cpp
pair( const T1& x, const T2& y );
```
_(conditionally explicit since C++11)(constexpr since C++14)_

```cpp
template< class U1, class U2 >
pair( U1&& x, U2&& y );
```
_(since C++11) (until C++23) (constexpr since C++14)(conditionally explicit)_

```cpp
template< class U1 = T1, class U2 = T2 >
constexpr pair( U1&& x, U2&& y );
```
_(since C++23) (conditionally explicit)_

```cpp
template< class U1, class U2 >
constexpr pair( pair<U1, U2>& p );
```
_(since C++23) (conditionally explicit)_

```cpp
template< class U1, class U2 >
pair( const pair<U1, U2>& p );
```
_(conditionally explicit since C++11)(constexpr since C++14)_

```cpp
template< class U1, class U2 >
pair( pair<U1, U2>&& p );
```
_(constexpr since C++14) (conditionally explicit since C++11)_

```cpp
template< class U1, class U2 >
constexpr pair( const pair<U1, U2>&& p );
```
_(since C++23) (conditionally explicit)_

```cpp
template< pair-like P >
constexpr pair ( P&& u );
```
_(since C++23) (conditionally explicit)_

```cpp
template< class... Args1, class... Args2 >
pair( std::piecewise_construct_t,
std::tuple<Args1...> first_args,
std::tuple<Args2...> second_args );
```
_(since C++11) (constexpr since C++20)_

```cpp
pair( const pair& p ) = default;
```

```cpp
pair( pair&& p ) = default;
```
_(since C++11)_

## Parameters
- `x`: value to initialize the first element of this pair
- `y`: value to initialize the second element of this pair
- `p`: pair of values used to initialize both elements of this pair
- `u`: pair-like object of values used to initialize both elements of this pair
- `first_args`: tuple of constructor arguments to initialize the first element of this pair
- `second_args`: tuple of constructor arguments to initialize the second element of this pair

## Example
```cpp
#include <complex>
#include <iostream>
#include <string>
#include <tuple>
#include <utility>
 
int main()
{
    auto print = [](auto rem, auto const& pair)
    {
        std::cout << rem << "(" << pair.first << ", " << pair.second << ")\n";
    };
 
    std::pair<int, float> p1;
    print("(1) Value-initialized: ", p1);
 
    std::pair<int, double> p2{42, 3.1415};
    print("(2) Initialized with two values: ", p2);
 
    std::pair<char, int> p4{p2};
    print("(4) Implicitly converted: ", p4);
 
    std::pair<std::complex<double>, std::string> p6
        {std::piecewise_construct, std::forward_as_tuple(0.123, 7.7),
            std::forward_as_tuple(10, 'a')};
    print("(8) Piecewise constructed: ", p6);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 265 | C++98 | the default constructor copy-initialized firstand second with T1() and T2() respectively(thus required T1 and T2 to be CopyConstructible) | first and secondare value-initialized |
| LWG 2510 | C++11 | the default constructor was implicit | made conditionally-explicit |
| N4387 | C++11 | some constructors were implicit-only, preventing some uses | constructors made conditionally-explicit |

## See also
- [make_pair](/cpp/utility/pair/make_pair/)
- [(constructor)](/cpp/utility/tuple/tuple/)
