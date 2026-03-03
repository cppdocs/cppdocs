---
title: "std::bit_cast"
source_path: "cpp/numeric/bit_cast"
header: "<bit>"
category: "numeric"
since: "C++20"
---

Obtain a value of type To by reinterpreting the object representation of From. Every bit in the [value representation](/cpp/language/objects/#Object_representation_and_value_representation) of the returned To object is equal to the corresponding bit in the [object](/cpp/language/objects/#Object_representation_and_value_representation) representation of from. The values of padding bits in the returned To object are unspecified.

## Declarations
```cpp
template< class To, class From >
constexpr To bit_cast( const From& from ) noexcept;
```
_(since C++20)_

## Parameters
- `from`: the source of bits for the return value

## Return value
An object of type To whose value representation is as described above.

## Notes
[reinterpret_cast](/cpp/language/reinterpret_cast/) (or equivalent [explicit cast](/cpp/language/explicit_cast/)) between pointer or reference types shall not be used to reinterpret object representation in most cases because of the [type aliasing rule](/cpp/language/reinterpret_cast/#Type_aliasing).

## Example
```cpp
#include <bit>
#include <cstdint>
#include <iostream>
 
constexpr double f64v = 19880124.0; 
constexpr auto u64v = std::bit_cast<std::uint64_t>(f64v);
static_assert(std::bit_cast<double>(u64v) == f64v); // round-trip
 
constexpr std::uint64_t u64v2 = 0x3fe9000000000000ull;
constexpr auto f64v2 = std::bit_cast<double>(u64v2);
static_assert(std::bit_cast<std::uint64_t>(f64v2) == u64v2); // round-trip
 
int main()
{
    std::cout
        << "std::bit_cast<std::uint64_t>(" << std::fixed << f64v << ") == 0x"
        << std::hex << u64v << '\n'
        << "std::bit_cast<double>(0x" << std::hex << u64v2 << ") == "
        << std::fixed << f64v2 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2482(P1272R4) | C++20 | it was unspecified whether UB would occur when involving indeterminate bits | specified |

## See also
- [start_lifetime_asstart_lifetime_as_array](/cpp/memory/start_lifetime_as/)
