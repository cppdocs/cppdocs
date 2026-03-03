---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::unordered_map"
source_path: "cpp/container/unordered_map/unordered_map"
category: "container"
since: "C++20"
---

Constructs new container from a variety of data sources. Optionally uses user supplied bucket_count as a minimal number of buckets to create, hash as the hash function, equal as the function to compare keys and alloc as the allocator.

## Declarations
```cpp
unordered_map()
: unordered_map(size_type(/* unspecified */)) {}
```
_(since C++11) (until C++20)_

```cpp
unordered_map();
```
_(since C++20)_

```cpp
explicit unordered_map( size_type bucket_count,
const Hash& hash = Hash(),
const key_equal& equal = key_equal(),
const Allocator& alloc = Allocator() );
```
_(since C++11)_

```cpp
unordered_map( size_type bucket_count,
const Allocator& alloc )
: unordered_map(bucket_count, Hash(), key_equal(), alloc) {}
```
_(since C++14)_

```cpp
unordered_map( size_type bucket_count,
const Hash& hash,
const Allocator& alloc )
: unordered_map(bucket_count, hash, key_equal(), alloc) {}
```
_(since C++14)_

```cpp
explicit unordered_map( const Allocator& alloc );
```
_(since C++11)_

```cpp
template< class InputIt >
unordered_map( InputIt first, InputIt last,
size_type bucket_count = /* unspecified */,
const Hash& hash = Hash(),
const key_equal& equal = key_equal(),
const Allocator& alloc = Allocator() );
```
_(since C++11)_

```cpp
template< class InputIt >
unordered_map( InputIt first, InputIt last,
size_type bucket_count,
const Allocator& alloc )
: unordered_map(first, last,
bucket_count, Hash(), key_equal(), alloc) {}
```
_(since C++14)_

```cpp
template< class InputIt >
unordered_map( InputIt first, InputIt last,
size_type bucket_count,
const Hash& hash,
const Allocator& alloc )
: unordered_map(first, last,
bucket_count, hash, key_equal(), alloc) {}
```
_(since C++14)_

```cpp
unordered_map( const unordered_map& other );
```
_(since C++11)_

```cpp
unordered_map( const unordered_map& other, const Allocator& alloc );
```
_(since C++11)_

```cpp
unordered_map( unordered_map&& other );
```
_(since C++11)_

```cpp
unordered_map( unordered_map&& other, const Allocator& alloc );
```
_(since C++11)_

```cpp
unordered_map( std::initializer_list<value_type> init,
size_type bucket_count = /* unspecified */,
const Hash& hash = Hash(),
const key_equal& equal = key_equal(),
const Allocator& alloc = Allocator() );
```
_(since C++11)_

```cpp
unordered_map( std::initializer_list<value_type> init,
size_type bucket_count,
const Allocator& alloc )
: unordered_map(init, bucket_count,
Hash(), key_equal(), alloc) {}
```
_(since C++14)_

```cpp
unordered_map( std::initializer_list<value_type> init,
size_type bucket_count,
const Hash& hash,
const Allocator& alloc )
: unordered_map(init, bucket_count,
hash, key_equal(), alloc) {}
```
_(since C++14)_

```cpp
template< container-compatible-range<value_type> R >
unordered_map( std::from_range_t, R&& rg,
size_type bucket_count = /* see description */,
const Hash& hash = Hash(),
const key_equal& equal = key_equal(),
const Allocator& alloc = Allocator() );
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R >
unordered_map( std::from_range_t, R&& rg,
size_type bucket_count,
const Allocator& alloc )
: unordered_map(std::from_range, std::forward<R>(rg),
bucket_count, Hash(), key_equal(), alloc) {}
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R >
unordered_map( std::from_range_t, R&& rg,
size_type bucket_count,
const Hash& hash,
const Alloc& alloc )
: unordered_map(std::from_range, std::forward<R>(rg),
bucket_count, hash, key_equal(), alloc) {}
```
_(since C++23)_

## Parameters
- `alloc`: allocator to use for all memory allocations of this container
- `bucket_count`: minimal number of buckets to use on initialization. If it is not specified, an unspecified default value is used
- `hash`: hash function to use
- `equal`: comparison function to use for all key comparisons of this container
- `first, last`: the range [first, last) to copy the elements from
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to value_type
- `other`: another container to be used as source to initialize the elements of the container with
- `init`: initializer list to initialize the elements of the container with

## Notes
Although not formally required until C++23, some implementations have already put the template parameter Allocator into [non-deduced contexts](/cpp/language/template_argument_deduction/#Non-deduced_contexts) in earlier modes.

## Example
```cpp
#include <bitset>
#include <string>
#include <unordered_map>
#include <utility>
#include <vector>
 
struct Key
{
    std::string first;
    std::string second;
};
 
struct KeyHash
{
    std::size_t operator()(const Key& k) const
    {
        return std::hash<std::string>()(k.first) ^
            (std::hash<std::string>()(k.second) << 1);
    }
};
 
struct KeyEqual
{
    bool operator()(const Key& lhs, const Key& rhs) const
    {
        return lhs.first == rhs.first && lhs.second == rhs.second;
    }
};
 
struct Foo
{
    Foo(int val_) : val(val_) {}
    int val;
    bool operator==(const Foo &rhs) const { return val == rhs.val; }
};
 
template<>
struct std::hash<Foo>
{
    std::size_t operator()(const Foo &f) const
    {
        return std::hash<int>{}(f.val);
    }
};
 
int main()
{
    // default constructor: empty map
    std::unordered_map<std::string, std::string> m1;
 
    // list constructor
    std::unordered_map<int, std::string> m2 =
    {
        {1, "foo"},
        {3, "bar"},
        {2, "baz"}
    };
 
    // copy constructor
    std::unordered_map<int, std::string> m3 = m2;
 
    // move constructor
    std::unordered_map<int, std::string> m4 = std::move(m2);
 
    // range constructor
    std::vector<std::pair<std::bitset<8>, int>> v = {{0x12, 1}, {0x01,-1}};
    std::unordered_map<std::bitset<8>, double> m5(v.begin(), v.end());
 
    // Option 1 for a constructor with a custom Key type
    // Define the KeyHash and KeyEqual structs and use them in the template
    std::unordered_map<Key, std::string, KeyHash, KeyEqual> m6 =
    {
        {{"John", "Doe"}, "example"},
        {{"Mary", "Sue"}, "another"}
    };
 
    // Option 2 for a constructor with a custom Key type.
    // Define a const == operator for the class/struct and specialize std::hash
    // structure in the std namespace
    std::unordered_map<Foo, std::string> m7 =
    {
        {Foo(1), "One"}, {2, "Two"}, {3, "Three"}
    };
 
    // Option 3: Use lambdas
    // Note that the initial bucket count has to be passed to the constructor
    struct Goo { int val; };
    auto hash = [](const Goo &g){ return std::hash<int>{}(g.val); };
    auto comp = [](const Goo &l, const Goo &r){ return l.val == r.val; };
    std::unordered_map<Goo, double, decltype(hash), decltype(comp)> m8(10, hash, comp);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2193 | C++11 | the default constructor (1) was explicit | made non-explicit |
| LWG 2230 | C++11 | the semantics of overload (13) was not specified | specified |

## See also
- [operator=](/cpp/container/unordered_map/operator/)
