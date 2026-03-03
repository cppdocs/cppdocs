---
title: "std::complex<T>::real"
source_path: "cpp/numeric/complex/real"
category: "numeric"
since: "C++14"
---

Accesses the real part of the complex number.

## Declarations
```cpp
primary template std::complex<T>
```

```cpp
T real() const;
```
_(until C++14)_

```cpp
constexpr T real() const;
```
_(since C++14)_

```cpp
void real( T value );
```
_(until C++20)_

```cpp
constexpr void real( T value );
```
_(since C++20)_

```cpp
specialization std::complex<float>
```

```cpp
float real() const;
```
_(until C++11)_

```cpp
constexpr float real() const;
```
_(since C++11)_

```cpp
void real( float value );
```
_(until C++20)_

```cpp
constexpr void real( float value );
```
_(since C++20)_

```cpp
specialization std::complex<double>
```

```cpp
double real() const;
```
_(until C++11)_

```cpp
constexpr double real() const;
```
_(since C++11)_

```cpp
void real( double value );
```
_(until C++20)_

```cpp
constexpr void real( double value );
```
_(since C++20)_

```cpp
specialization std::complex<long double>
```

```cpp
long double real() const;
```
_(until C++11)_

```cpp
constexpr long double real() const;
```
_(since C++11)_

```cpp
void real( long double value );
```
_(until C++20)_

```cpp
constexpr void real( long double value );
```
_(since C++20)_

## Parameters
- `value`: the value to set the real part to

## Notes
In C++11, overload (1) in [std::complex](/cpp/numeric/complex/) specializations used to be specified without const qualifier. However, in C++11, a [constexpr](/cpp/language/constexpr/) specifier used in a non-static member function implies const, and thus the behavior is as if const is specified.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 387 | C++98 | the real part could not be set directly | can be set directly via a new real overload |

## See also
- [real](/cpp/numeric/complex/real2/)
- [imag](/cpp/numeric/complex/imag/)
