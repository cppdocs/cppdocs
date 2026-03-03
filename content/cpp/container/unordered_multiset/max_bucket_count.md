---
title: "std::unordered_multiset<Key,Hash,KeyEqual,Allocator>::max_bucket_count"
source_path: "cpp/container/unordered_multiset/max_bucket_count"
category: "container"
since: "C++11"
---

Returns the maximum number of buckets the container is able to hold due to system or library implementation limitations.

## Declarations
```cpp
size_type max_bucket_count() const;
```
_(since C++11)_

## Return value
Maximum number of buckets.

## Example
```cpp
#include <iostream>
#include <unordered_set>
 
int main()
{
    struct Ha { std::size_t operator()(long x) const { return std::hash<long>{}(x); }; };
 
    auto c1 = std::unordered_multiset<char>{};
    auto c2 = std::unordered_multiset<long>{};
    auto c3 = std::unordered_multiset<long, std::hash<int>>{};
    auto c4 = std::unordered_multiset<long, Ha>{};
 
    std::cout
        << "Max bucket count of\n" << std::hex << std::showbase
        << "c1: " << c1.max_bucket_count() << '\n'
        << "c2: " << c2.max_bucket_count() << '\n'
        << "c3: " << c3.max_bucket_count() << '\n'
        << "c4: " << c4.max_bucket_count() << '\n'
        ;
}
```

## See also
- [bucket_count](/cpp/container/unordered_multiset/bucket_count/)
