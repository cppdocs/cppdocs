---
title: "std::copy_n"
source_path: "cpp/algorithm/copy_n"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

1) Copies exactly count values from the range beginning at first to the range beginning at result. Formally, for each integer i in [0,count), performs *(result + i) = *(first + i).

## Declarations
```cpp
template< class InputIt, class Size, class OutputIt >
OutputIt copy_n( InputIt first, Size count, OutputIt result );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class Size, class ForwardIt2 >
ForwardIt2 copy_n( ExecutionPolicy&& policy,
ForwardIt1 first, Size count, ForwardIt2 result );
```
_(since C++17)_

## Parameters
- `first`: the beginning of the range of elements to copy from
- `count`: number of the elements to copy
- `result`: the beginning of the destination range
- `policy`: the execution policy to use

## Return value
Iterator in the destination range, pointing past the last element copied if count > 0 or result otherwise.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <numeric>
#include <string>
#include <vector>
 
int main()
{
    std::string in {"1234567890"};
    std::string out;
 
    std::copy_n(in.begin(), 4, std::back_inserter(out));
    std::cout << out << '\n';
 
    std::vector<int> v_in(128);
    std::iota(v_in.begin(), v_in.end(), 1);
    std::vector<int> v_out(v_in.size());
 
    std::copy_n(v_in.cbegin(), 100, v_out.begin());
    std::cout << std::accumulate(v_out.begin(), v_out.end(), 0) << '\n';
}
```

## See also
- [copycopy_if](/cpp/algorithm/copy/)
- [ranges::copy_n](/cpp/algorithm/ranges/copy_n/)
