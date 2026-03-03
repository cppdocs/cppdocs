---
title: "std::seed_seq::size"
source_path: "cpp/numeric/random/seed_seq/size"
category: "numeric"
since: "C++11"
---

Returns the size of the underlying seed sequence.

## Declarations
```cpp
std::size_t size() const noexcept;
```
_(since C++11)_

## Return value
[v](/cpp/numeric/random/seed_seq/#v) ﻿.size()

## Example
```cpp
#include <iostream>
#include <random>
 
int main()
{
    std::seed_seq s1 = {-1, 0, 1};
    std::cout << s1.size() << '\n';
}
```
