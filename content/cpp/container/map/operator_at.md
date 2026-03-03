---
title: "std::map<Key,T,Compare,Allocator>::operator[]"
source_path: "cpp/container/map/operator_at"
category: "container"
since: "C++11"
---

Returns a reference to the value that is mapped to a key equivalent to key or x respectively, performing an insertion if such key does not already exist.

## Declarations
```cpp
T& operator[]( const Key& key );
```

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
In the published C++11 and C++14 standards, this function was specified to require mapped_type to be [DefaultInsertable](/cpp/named_req/defaultinsertable/) and [key_type](/cpp/container/map/#Member_types) to be [CopyInsertable](/cpp/named_req/copyinsertable/) or [MoveInsertable](/cpp/named_req/moveinsertable/) into *this. This specification was defective and was fixed by [LWG issue 2469](https://cplusplus.github.io/LWG/issue2469), and the description above incorporates the resolution of that issue.

However, one implementation (libc++) is known to construct the [key_type](/cpp/container/map/#Member_types) and mapped_type objects via two separate allocator construct() calls, as arguably required by the standards as published, rather than emplacing a [value_type](/cpp/container/map/#Member_types) object.

operator[] is non-const because it inserts the key if it doesn't exist. If this behavior is undesirable or if the container is const, [at](/cpp/container/map/at/) may be used.

[insert_or_assign](/cpp/container/map/insert_or_assign/) returns more information than operator[] and does not require default-constructibility of the mapped type.

## Example
```cpp
#include <iostream>
#include <string>
#include <map>
 
void println(auto const comment, auto const& map)
{
    std::cout << comment << '{';
    for (const auto& pair : map)
        std::cout << '{' << pair.first << ": " << pair.second << '}';
    std::cout << "}\n";
}
 
int main()
{
    std::map<char, int> letter_counts{{'a', 27}, {'b', 3}, {'c', 1}};
 
    println("letter_counts initially contains: ", letter_counts);
 
    letter_counts['b'] = 42; // updates an existing value
    letter_counts['x'] = 9;  // inserts a new value
 
    println("after modifications it contains: ", letter_counts);
 
    // count the number of occurrences of each word
    // (the first call to operator[] initialized the counter with zero)
    std::map<std::string, int>  word_map;
    for (const auto& w : {"this", "sentence", "is", "not", "a", "sentence",
                          "this", "sentence", "is", "a", "hoax"})
        ++word_map[w];
    word_map["that"]; // just inserts the pair {"that", 0}
 
    for (const auto& [word, count] : word_map)
        std::cout << count << " occurrence(s) of word '" << word << "'\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 334 | C++98 | the effect of overload (1) was simply returning(*((insert(std::make_pair(x, T()))).first)).second | provided its owndescription instead |

## See also
- [at](/cpp/container/map/at/)
- [insert_or_assign](/cpp/container/map/insert_or_assign/)
- [try_emplace](/cpp/container/map/try_emplace/)
