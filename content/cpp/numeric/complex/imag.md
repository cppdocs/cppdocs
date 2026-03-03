---
title: "std::complex<T>::imag"
source_path: "cpp/numeric/complex/imag"
category: "numeric"
since: "C++14"
---

Accesses the imaginary part of the complex number.

## Declarations
```cpp
primary template std::complex<T>
```

```cpp
T imag() const;
```
_(until C++14)_

```cpp
constexpr T imag() const;
```
_(since C++14)_

```cpp
void imag( T value );
```
_(until C++20)_

```cpp
constexpr void imag( T value );
```
_(since C++20)_

```cpp
specialization std::complex<float>
```

```cpp
float imag() const;
```
_(until C++11)_

```cpp
constexpr float imag() const;
```
_(since C++11)_

```cpp
void imag( float value );
```
_(until C++20)_

```cpp
constexpr void imag( float value );
```
_(since C++20)_

```cpp
specialization std::complex<double>
```

```cpp
double imag() const;
```
_(until C++11)_

```cpp
constexpr double imag() const;
```
_(since C++11)_

```cpp
void imag( double value );
```
_(until C++20)_

```cpp
constexpr void imag( double value );
```
_(since C++20)_

```cpp
specialization std::complex<long double>
```

```cpp
long double imag() const;
```
_(until C++11)_

```cpp
constexpr long double imag() const;
```
_(since C++11)_

```cpp
void imag( long double value );
```
_(until C++20)_

```cpp
constexpr void imag( long double value );
```
_(since C++20)_

## Parameters
- `value`: the value to set the imaginary part to

## Notes
In C++11, overload (1) in [std::complex](/cpp/numeric/complex/) specializations used to be specified without const qualifier. However, in C++11, a [constexpr](/cpp/language/constexpr/) specifier used in a non-static member function implies const, and thus the behavior is as if const is specified.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 387 | C++98 | the imaginary part could not be set directly | can be set directly via a new imag overload |

## See also
- [imag](/cpp/numeric/complex/imag2/)
- [real](/cpp/numeric/complex/real/)
