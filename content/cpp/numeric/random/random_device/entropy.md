---
title: "std::random_device::entropy"
source_path: "cpp/numeric/random/random_device/entropy"
category: "numeric"
since: "C++11"
---

Obtains an estimate of the random number device entropy, which is a floating-point value between 0 and log2(max()+1) (which is equal to [std::numeric_limits](/cpp/types/numeric_limits/)<unsigned int>::digits). If the device has n states whose individual probabilities are P0,...,Pn-1, the device entropy S is defined as

## Declarations
```cpp
double entropy() const noexcept;
```
_(since C++11)_

## Return value
The value of the device entropy, or zero if not applicable.

## Notes
This function is not fully implemented in some standard libraries. For example, [LLVM libc++](https://github.com/llvm-mirror/libcxx/blob/master/src/random.cpp#L174) prior to version 12 always returns zero even though the device is non-deterministic. In comparison, Microsoft Visual C++ implementation always returns 32, and [boost.random](https://github.com/boostorg/random/blob/master/src/random_device.cpp#L242) returns 10.

The entropy of the Linux kernel device /dev/urandom may be obtained using [ioctl RNDGETENTCNT](https://man7.org/linux/man-pages/man4/random.4.html) — that is what std::random_device::entropy() in [GNU libstdc++](https://github.com/gcc-mirror/gcc/blob/master/libstdc%2B%2B-v3/src/c%2B%2B11/random.cc#L188) uses as of version 8.1.

## Example
```cpp
#include <iostream>
#include <random>
 
int main()
{
    std::random_device rd;
    std::cout << rd.entropy() << '\n';
}
```
