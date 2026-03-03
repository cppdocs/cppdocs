---
title: "std::random_device::random_device"
source_path: "cpp/numeric/random/random_device/random_device"
category: "numeric"
since: "C++11"
---

1) Default constructs a new [std::random_device](/cpp/numeric/random/random_device/) object with an implementation-defined token.

## Declarations
```cpp
random_device() : random_device( /*implementation-defined*/ ) {}
```
_(since C++11)_

```cpp
explicit random_device( const std::string& token );
```
_(since C++11)_

```cpp
random_device( const random_device& ) = delete;
```
_(since C++11)_

## Notes
The implementation in [libstdc++](https://github.com/gcc-mirror/gcc/blob/master/libstdc%2B%2B-v3/src/c%2B%2B11/random.cc#L319) expects token to name the source of random bytes. Possible token values include "default", "hw", "rand_s", "rdseed", "rdrand", "rdrnd", "/dev/urandom", "/dev/random", "mt19937", and integer string specifying the seed of the mt19937 engine. (Token values other than "default" are only valid for certain targets.)

The implementation in [libc++](https://github.com/llvm/llvm-project/blob/main/libcxx/src/random.cpp#L124), when configured to use character device as the source, expects token to be the name of a character device that produces random numbers when read from; otherwise it expects token to be "/dev/urandom".

Both libstdc++ and libc++ throw an exception if provided an unsupported token. [Microsoft's stdlib](https://github.com/microsoft/STL/blob/c10ae01b4d9508eed9d5f059a120ee7223b6ac12/stl/inc/random#L5026) ignores the token entirely.

## Example
```cpp
#include <iostream>
#include <random>
 
void demo(std::random_device&& rd)
{
    static std::uniform_int_distribution<int> d(0, 9);
    for (int n = 0; n != 10; ++n)
        std::cout << d(rd) << ' ';
    std::cout << '\n';
}
 
int main()
{
    // Note: How the supplied token is handled is implementation-defined!
 
    // Default token for random_device is usually /dev/urandom on Linux
    demo(std::random_device {});
 
    // Request /dev/random, blocks when entropy is empty
    // Works on libstdc++, ignored in msvc++, might throw on libc++ (as of Nov 2022)
    demo(std::random_device {"/dev/random"});
 
    // Request non-blocking /dev/urandom, ensures that RDRAND is not used
    // Works on libstdc++ and libc++, ignored in msvc++ (as of Nov 2022)
    demo(std::random_device {"/dev/urandom"});
 
    // Request "hw", will use hardware-based random generation like rdrand
    // Works on libstdc++, ignored in msvc++, throws on libc++ (as of Nov 2022)
    demo(std::random_device {"hw"});
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0935R0 | C++11 | default constructor was explicit | made implicit |
