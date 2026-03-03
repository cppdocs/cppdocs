---
title: "std::chrono::duration<Rep,Period>::operator+(unary), std::chrono::duration<Rep,Period>::operator-(unary)"
source_path: "cpp/chrono/duration/operator"
category: "chrono"
since: "C++17"
---

Implements unary plus and unary minus for the durations.

## Declarations
```cpp
constexpr duration operator+() const;
```
_(until C++17)_

```cpp
constexpr std::common_type_t<duration> operator+() const;
```
_(since C++17)_

```cpp
constexpr duration operator-() const;
```
_(until C++17)_

```cpp
constexpr std::common_type_t<duration> operator-() const;
```
_(since C++17)_

## Example
```cpp
#include <chrono>
#include <iostream>
 
int main()
{
    constexpr std::chrono::seconds s1(-052);
    constexpr std::chrono::seconds s2 = -s1;
 
    std::cout << "Negated " << s1 << " are " << s2 << '\n';
}
```

## See also
- [operator++operator++(int)operator--operator--(int)](/cpp/chrono/duration/operator_arith2/)
- [operator+operator-operator*operator/operator%](/cpp/chrono/duration/operator_arith4/)
