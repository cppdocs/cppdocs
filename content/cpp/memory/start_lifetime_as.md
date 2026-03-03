---
title: "std::start_lifetime_as, std::start_lifetime_as_array"
source_path: "cpp/memory/start_lifetime_as"
header: "<memory>"
category: "memory"
since: "C++23"
---

1-4) [Implicitly creates](/cpp/language/objects/#Object_creation) a complete object of type T (whose address is p) and objects nested within it. The value of each created object obj of [TriviallyCopyable](/cpp/named_req/triviallycopyable/) type U is determined in the same manner as for a call to [std::bit_cast](/cpp/numeric/bit_cast/)<U>(E) except that the storage is not actually accessed, where E is the lvalue of type U denoting obj. Otherwise, the values of such created objects are unspecified.
T shall be an [ImplicitLifetimeType](/cpp/named_req/implicitlifetimetype/) and shall be a [complete type](/cpp/language/type-id/#Incomplete_type). Otherwise, the program is ill-formed.The behavior is undefined if:
[p,(char*)p + sizeof(T)) does not denote a region of allocated storage that is a subset of the region of storage reachable through p, orthe region is not suitably aligned for the T.
Note that the unspecified value can be indeterminate.

## Declarations
```cpp
std::start_lifetime_as
```

```cpp
template< class T >
T* start_lifetime_as( void* p ) noexcept;
```
_(since C++23)_

```cpp
template< class T >
const T* start_lifetime_as( const void* p ) noexcept;
```
_(since C++23)_

```cpp
template< class T >
volatile T* start_lifetime_as( volatile void* p ) noexcept;
```
_(since C++23)_

```cpp
template< class T >
const volatile T* start_lifetime_as( const volatile void* p ) noexcept;
```
_(since C++23)_

```cpp
std::start_lifetime_as_array
```

```cpp
template< class T >
T* start_lifetime_as_array( void* p, std::size_t n ) noexcept;
```
_(since C++23)_

```cpp
template< class T >
const T* start_lifetime_as_array( const void* p,
std::size_t n ) noexcept;
```
_(since C++23)_

```cpp
template< class T >
volatile T* start_lifetime_as_array( volatile void* p,
std::size_t n ) noexcept;
```
_(since C++23)_

```cpp
template< class T >
const volatile T* start_lifetime_as_array( const volatile void* p,
std::size_t n ) noexcept;
```
_(since C++23)_

## Parameters
- `p`: the address of the region consisting objects
- `n`: the number of the element of the array to be created

## Notes
new (void_ptr) unsigned char[size] or new (void_ptr) [std::byte](/cpp/types/byte/)[size] works as an untyped version of std::start_lifetime_as, but it does not keep the object representation.

std::start_lifetime_as handles non-array types as well as arrays of known bound, while std::start_lifetime_as_array handles arrays of unknown bound.

## Example
```cpp
#include <complex>
#include <iostream>
#include <memory>
 
int main()
{
    alignas(std::complex<float>) unsigned char network_data[sizeof(std::complex<float>)]
    {
        0xcd, 0xcc, 0xcc, 0x3d, 0xcd, 0xcc, 0x4c, 0x3e
    };
 
//  auto d = *reinterpret_cast<std::complex<float>*>(network_data);
//  std::cout << d << '\n'; // UB: network_data does not point to a complex<float>
 
//  auto d1 = *std::launder(reinterpret_cast<std::complex<float>*>(network_data));
//  std::cout << d1 << '\n'; // UB: implicitly created objects have dynamic storage
//                                  duration and have indeterminate value initially,
//                                  even when an array which provides storage for
//                                  them has determinate bytes.
//                                  See also CWG2721.
 
    auto d2 = *std::start_lifetime_as<std::complex<float>>(network_data);
    std::cout << d2 << '\n'; // OK
}
```

## See also
- [bit_cast](/cpp/numeric/bit_cast/)
- [as_bytesas_writable_bytes](/cpp/container/span/as_bytes/)
