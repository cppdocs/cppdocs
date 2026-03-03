---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::operator[]"
source_path: "cpp/container/flat_map/operator_at"
category: "container"
since: "C++23"
---

Returns a reference to the value that is mapped to a key equivalent to key or x respectively, performing an insertion if such key does not already exist.

## Declarations
```cpp
T& operator[]( const Key& key );
```
_(since C++23)_

```cpp
T& operator[]( Key&& key );
```
_(since C++23)_

```cpp
template< class K >
T& operator[]( K&& x );
```
_(since C++23)_

## Parameters
- `key`: the key of the element to find
- `x`: a value of any type that can be transparently compared with a key

## Notes
operator[] is non-const because it inserts the key if it doesn't exist. If this behavior is undesirable or if the container is const, [at](/cpp/container/flat_map/at/) may be used.

[insert_or_assign](/cpp/container/flat_map/insert_or_assign/) returns more information than operator[] and does not require default-constructibility of the mapped type.

## Example
```cpp
#include <iostream>
#include <string>
#include <flat_map>
 
void println(auto const comment, auto const& map)
{
    std::cout << comment << '{';
    for (const auto& pair : map)
        std::cout << '{' << pair.first << ": " << pair.second << '}';
    std::cout << "}\n";
}
 
int main()
{
    std::flat_map<char, int> letter_counts{{'a', 27}, {'b', 3}, {'c', 1}};
 
    println("letter_counts initially contains: ", letter_counts);
 
    letter_counts['b'] = 42; // updates an existing value
    letter_counts['x'] = 9;  // inserts a new value
 
    println("after modifications it contains: ", letter_counts);
 
    // count the number of occurrences of each word
    // (the first call to operator[] initialized the counter with zero)
    std::flat_map<std::string, int>  word_map;
    for (const auto& w : {"this", "sentence", "is", "not", "a", "sentence",
                          "this", "sentence", "is", "a", "hoax"})
        ++word_map[w];
    word_map["that"]; // just inserts the pair {"that", 0}
 
    for (const auto& [word, count] : word_map)
        std::cout << count << " occurrence(s) of word '" << word << "'\n";
}
```

## See also
- [at](/cpp/container/flat_map/at/)
- [insert_or_assign](/cpp/container/flat_map/insert_or_assign/)
- [try_emplace](/cpp/container/flat_map/try_emplace/)
