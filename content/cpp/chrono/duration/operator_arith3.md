---
title: "std::chrono::duration<Rep,Period>::operator+=, -=, *=, /=, %="
source_path: "cpp/chrono/duration/operator"
category: "chrono"
---

Performs compound assignments between two durations with the same period or between a duration and a tick count value.

## Declarations
```cpp
duration& operator+=( const duration& d );
```
_(since C++11) (constexpr since C++17)_

```cpp
duration& operator-=( const duration& d );
```
_(since C++11) (constexpr since C++17)_

```cpp
duration& operator*=( const rep& rhs );
```
_(since C++11) (constexpr since C++17)_

```cpp
duration& operator/=( const rep& rhs );
```
_(since C++11) (constexpr since C++17)_

```cpp
duration& operator%=( const rep& rhs );
```
_(since C++11) (constexpr since C++17)_

```cpp
duration& operator%=( const duration& rhs );
```
_(since C++11) (constexpr since C++17)_

## Parameters
- `d`: duration on the right-hand side of the operator
- `rhs`: number of ticks on the right-hand side of the operator

## Return value
A reference to this duration after modification.

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::chrono::minutes m(11);
    m *= 2;
    m += std::chrono::hours(10); // hours implicitly convert to minutes
    std::cout << m.count() << " minutes equals "
              << std::chrono::duration_cast<std::chrono::hours>(m).count() 
              << " hours and ";
    m %= std::chrono::hours(1);
    std::cout << m.count() << " minutes\n";
}
```

## See also
- [operator++operator++(int)operator--operator--(int)](/cpp/chrono/duration/operator_arith2/)
- [operator+operator-operator*operator/operator%](/cpp/chrono/duration/operator_arith4/)
