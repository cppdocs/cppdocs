---
title: "std::seed_seq::param"
source_path: "cpp/numeric/random/seed_seq/param"
category: "numeric"
since: "C++11"
---

Copies the stored seeds to the range beginning with dest. Equivalent to [std::copy](/cpp/algorithm/copy/)([v](/cpp/numeric/random/seed_seq/#v) ﻿.begin(),[v](/cpp/numeric/random/seed_seq/#v) ﻿.end(), dest);.

## Declarations
```cpp
template< class OutputIt >
void param( OutputIt dest ) const;
```
_(since C++11)_

## Parameters
- `dest`: the beginning iterator of the output range

## Example
```cpp
#include <iostream>
#include <iterator>
#include <random>
 
int main()
{
    std::seed_seq s1 = {-1, 0, 1};
    s1.param(std::ostream_iterator<int>(std::cout, " "));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2180 | C++11 | seed_seq::param is non-throwing | it may throw exceptions |
