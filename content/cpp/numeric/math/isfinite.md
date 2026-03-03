---
title: "std::isfinite"
source_path: "cpp/numeric/math/isfinite"
header: "<cmath>"
category: "numeric"
since: "C++23"
---

1) Determines if the given floating point number num has finite value i.e. it is normal, subnormal or zero, but not infinite or NaN.The library provides overloads for all cv-unqualified floating-point types as the type of the parameter num.(since C++23)

## Declarations
```cpp
bool isfinite( float num );
bool isfinite( double num );
bool isfinite( long double num );
```
_(since C++11) (until C++23)_

```cpp
constexpr bool isfinite( /*floating-point-type*/ num );
```
_(since C++23)_

```cpp
SIMD overload (since C++26)
```

```cpp
template< /*math-floating-point*/ V >
constexpr typename /*deduced-simd-t*/<V>::mask_type
isfinite ( const V& v_num );
```
_(since C++26)_

```cpp
Additional overloads
```

```cpp
template< class Integer >
bool isfinite( Integer num );
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `num`: floating-point or integer value
- `v_num`: a data-parallel object of std::basic_simd specialization where its element type is a floating-point type

## Notes
The additional overloads are not required to be provided exactly as (A). They only need to be sufficient to ensure that for their argument num of integer type, std::isfinite(num) has the same effect as std::isfinite(static_cast<double>(num)).

## See also
- [fpclassify](/cpp/numeric/math/fpclassify/)
- [isinf](/cpp/numeric/math/isinf/)
- [isnan](/cpp/numeric/math/isnan/)
- [isnormal](/cpp/numeric/math/isnormal/)
- [C documentation](/c/numeric/math/isfinite/)
