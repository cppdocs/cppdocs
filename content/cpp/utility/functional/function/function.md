---
title: "std::function<R(Args...)>::function"
source_path: "cpp/utility/functional/function/function"
category: "utility"
since: "C++11"
---

Constructs a std::function from a variety of sources.

## Declarations
```cpp
function() noexcept;
```
_(since C++11)_

```cpp
function( std::nullptr_t ) noexcept;
```
_(since C++11)_

```cpp
function( const function& other );
```
_(since C++11)_

```cpp
function( function&& other );
```
_(since C++11) (until C++20)_

```cpp
function( function&& other ) noexcept;
```
_(since C++20)_

```cpp
template< class F >
function( F&& f );
```
_(since C++11)_

```cpp
template< class Alloc >
function( std::allocator_arg_t, const Alloc& alloc ) noexcept;
```
_(since C++11) (removed in C++17)_

```cpp
template< class Alloc >
function( std::allocator_arg_t, const Alloc& alloc,
std::nullptr_t ) noexcept;
```
_(since C++11) (removed in C++17)_

```cpp
template< class Alloc >
function( std::allocator_arg_t, const Alloc& alloc,
const function& other );
```
_(since C++11) (removed in C++17)_

```cpp
template< class Alloc >
function( std::allocator_arg_t, const Alloc& alloc,
function&& other );
```
_(since C++11) (removed in C++17)_

```cpp
template< class F, class Alloc >
function( std::allocator_arg_t, const Alloc& alloc, F f );
```
_(since C++11) (removed in C++17)_

## Parameters
- `other`: the function object used to initialize *this
- `f`: a callable object used to initialize *this
- `alloc`: an Allocator used for internal memory allocation

## Notes
std::function's allocator support was poorly specified and inconsistently implemented. Some implementations do not provide overloads ([6-10](#Version_6)) at all, some provide the overloads but ignore the supplied allocator argument, and some provide the overloads and use the supplied allocator for construction but not when the std::function is reassigned. As a result, allocator support was removed in C++17.

## Example
```cpp
#include <functional>
#include <iostream>
#include <utility>
 
void print_num(int i) { std::cout << "print_num(" << i << ")\n"; }
 
int main()
{
    std::function<void(int)> func1; // (1) empty constructor
    try
    {
        func1(333 << 1);
    }
    catch (const std::bad_function_call& ex)
    {
        std::cout << "1) " << ex.what() << '\n';
    }
 
    std::function<void(int)> func2{nullptr}; // (2) empty constructor
    try
    {
        func1(222 * 3);
    }
    catch (const std::bad_function_call& ex)
    {
        std::cout << "2) " << ex.what() << '\n';
    }
 
    func1 = print_num; // initializes func1 using assignment operator
 
    std::function<void(int)> func3{func1}; // (3) copy constructor
    func3(33);
 
    std::function<void(int)> func4{std::move(func3)}; // (4) move constructor,
                                                      // func3 in unspecified state
    func4(44);
 
    std::function<void(int)> func5{print_num}; // (5) constructor with function
    func5(55);
 
    // (5) constructor with lambda
    std::function<void(int)> func6([](int i) { std::cout << "lambda(" << i << ")\n"; });
    func6(66);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2132 | C++11 | overloads (5,10) might be ambiguous | constrained |
| LWG 2774 | C++11 | (5,10) performed an additional move | eliminated |

## See also
- [(constructor)](/cpp/utility/functional/move_only_function/move_only_function/)
