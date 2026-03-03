---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::operator[]"
source_path: "cpp/container/unordered_map/operator_at"
category: "container"
since: "C++11"
---

Returns a reference to the value that is mapped to a key equivalent to key or x respectively, performing an insertion if such key does not already exist.

## Declarations
```cpp
T& operator[]( const Key& key );
```
_(since C++11)_

```cpp
T& operator[]( Key&& key );
```
_(since C++11)_

```cpp
template< class K >
T& operator[]( K&& x );
```
_(since C++26)_

## Parameters
- `key`: the key of the element to find
- `x`: a value of any type that can be transparently compared with a key

## Notes
In the published C++11 and C++14 standards, this function was specified to require mapped_type to be [DefaultInsertable](/cpp/named_req/defaultinsertable/) and [key_type](/cpp/container/unordered_map/#Member_types) to be [CopyInsertable](/cpp/named_req/copyinsertable/) or [MoveInsertable](/cpp/named_req/moveinsertable/) into *this. This specification was defective and was fixed by [LWG issue 2469](https://cplusplus.github.io/LWG/issue2469), and the description above incorporates the resolution of that issue.

However, one implementation (libc++) is known to construct the [key_type](/cpp/container/unordered_map/#Member_types) and mapped_type objects via two separate allocator construct() calls, as arguably required by the standards as published, rather than emplacing a [value_type](/cpp/container/unordered_map/#Member_types) object.

operator[] is non-const because it inserts the key if it doesn't exist. If this behavior is undesirable or if the container is const, [at](/cpp/container/unordered_map/at/) may be used.

[insert_or_assign](/cpp/container/unordered_map/insert_or_assign/) returns more information than operator[] and does not require default-constructibility of the mapped type.

## Example
```cpp
#include <iostream>
#include <string>
#include <unordered_map>
 
void println(auto const comment, auto const& map)
{
    std::cout << comment << '{';
    for (const auto& pair : map)
        std::cout << '{' << pair.first << ": " << pair.second << '}';
    std::cout << "}\n";
}
 
int main()
{
    std::unordered_map<char, int> letter_counts{{'a', 27}, {'b', 3}, {'c', 1}};
 
    println("letter_counts initially contains: ", letter_counts);
 
    letter_counts['b'] = 42; // updates an existing value
    letter_counts['x'] = 9;  // inserts a new value
 
    println("after modifications it contains: ", letter_counts);
 
    // count the number of occurrences of each word
    // (the first call to operator[] initialized the counter with zero)
    std::unordered_map<std::string, int>  word_map;
    for (const auto& w : {"this", "sentence", "is", "not", "a", "sentence",
                          "this", "sentence", "is", "a", "hoax"})
        ++word_map[w];
    word_map["that"]; // just inserts the pair {"that", 0}
 
    for (const auto& [word, count] : word_map)
        std::cout << count << " occurrence(s) of word '" << word << "'\n";
}
```

## See also
- [at](/cpp/container/unordered_map/at/)
- [insert_or_assign](/cpp/container/unordered_map/insert_or_assign/)
- [try_emplace](/cpp/container/unordered_map/try_emplace/)
