---
title: "std::experimental::is_simd, std::experimental::is_simd_mask"
source_path: "cpp/experimental/simd/is_simd"
header: "<experimental/simd>"
category: "experimental"
---

1) If T is a specialization of the [simd](/cpp/experimental/simd/simd/) class template, provides the member constant value equal true. For any other type, value is false.

## Declarations
```cpp
template< class T >
struct is_simd;
```
_(parallelism TS v2)_

```cpp
template< class T >
struct is_simd_mask;
```
_(parallelism TS v2)_

## Notes
is_simd_v<T> is necessary but not sufficient for testing whether T can be used as a SIMD type. For example, is_simd_v<simd<bool>> is true, even though bool is not included in the permissible vectorizable types. The missing condition is [std::is_constructible_v](/cpp/types/is_constructible/)<T>, which is false for simd<bool>.

## Example
```cpp
#include <experimental/simd>
#include <iostream>
#include <string_view>
 
namespace stdx = std::experimental;
 
template<typename T>
void test_simd(std::string_view type_name)
{
    std::cout << std::boolalpha
              << "Type: " << type_name << '\n'
              << "  is_simd: " << stdx::is_simd_v<T> << '\n'
              << "  is_constructible: " << std::is_constructible_v<T> << '\n';
}
 
template<typename T>
void test_simd_mask(std::string_view type_name)
{
    std::cout << std::boolalpha
              << "Type: " << type_name << '\n'
              << "  is_simd_mask: " << stdx::is_simd_mask_v<T> << '\n'
              << "  is_constructible: " << std::is_constructible_v<T> << "\n\n";
}
 
int main() 
{
    test_simd<int>("int");
    test_simd_mask<int>("int");
 
    test_simd<stdx::simd<float>>("simd<float>");
    test_simd_mask<stdx::simd_mask<float>>("simd_mask<float>");
 
    test_simd<stdx::simd<bool>>("simd<bool>");
    test_simd_mask<stdx::simd_mask<bool>>("simd_mask<bool>");
}
```
