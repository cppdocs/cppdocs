---
title: "std::chrono::duration<Rep,Period>::operator++, std::chrono::duration<Rep,Period>::operator--"
source_path: "cpp/chrono/duration/operator"
category: "chrono"
---

Increments or decrements the number of ticks for this duration.

## Declarations
```cpp
duration& operator++();
```
_(since C++11) (constexpr since C++17)_

```cpp
duration operator++( int );
```
_(since C++11) (constexpr since C++17)_

```cpp
duration& operator--();
```
_(since C++11) (constexpr since C++17)_

```cpp
duration operator--( int );
```
_(since C++11) (constexpr since C++17)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    std::chrono::hours h(1);
    std::chrono::minutes m = ++h;
    m--;
    std::cout << m.count() << " minutes\n";
}
```

## See also
- [operator+=operator-=operator*=operator/=operator%=](/cpp/chrono/duration/operator_arith3/)
- [operator+operator-operator*operator/operator%](/cpp/chrono/duration/operator_arith4/)
