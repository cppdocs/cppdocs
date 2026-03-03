---
title: "std::function<R(Args...)>::operator="
source_path: "cpp/utility/functional/function/operator"
category: "utility"
since: "C++11"
---

Assigns a new target to std::function.

## Declarations
```cpp
function& operator=( const function& other );
```
_(since C++11)_

```cpp
function& operator=( function&& other );
```
_(since C++11)_

```cpp
function& operator=( std::nullptr_t ) noexcept;
```
_(since C++11)_

```cpp
template< class F >
function& operator=( F&& f );
```
_(since C++11)_

```cpp
template< class F >
function& operator=( std::reference_wrapper<F> f ) noexcept;
```
_(since C++11)_

## Parameters
- `other`: another std::function object to copy the target of
- `f`: a callable to initialize the target with

## Return value
*this

## Notes
Even before allocator support was removed from std::function in C++17, these assignment operators use the default allocator rather than the allocator of *this or the allocator of other (see [LWG issue 2386](https://cplusplus.github.io/LWG/issue2386)).

## Example
```cpp
#include <cassert>
#include <functional>
#include <utility>
 
int inc(int n) { return n + 1; }
 
int main()
{
    std::function<int(int)> f1;
    std::function<int(int)> f2(inc);
    assert(f1 == nullptr and f2 != nullptr);
 
    f1 = f2; // overload (1)
    assert(f1 != nullptr and f1(1) == 2);
 
    f1 = std::move(f2); // overload (2)
    assert(f1 != nullptr and f1(1) == 2);
    // f2 is in valid but unspecified state
 
    f1 = nullptr; // overload (3)
    assert(f1 == nullptr);
 
    f1 = inc; // overload (4)
    assert(f1 != nullptr and f1(1) == 2);
 
    f1 = [](int n) { return n + n; }; // overload (4)
    assert(f1 != nullptr and f1(2) == 4);
 
    std::reference_wrapper<int(int)> ref1 = std::ref(inc);
    f1 = ref1; // overload (5)
    assert(f1 != nullptr and f1(1) == 2);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2132 | C++11 | the overload (4) taking a Callable object might be ambiguous | constrained |
| LWG 2401 | C++11 | assignment operator (3) from std::nullptr_t not required to be noexcept | required |

## See also
- [operator=](/cpp/utility/functional/move_only_function/operator/)
- [assign](/cpp/utility/functional/function/assign/)
