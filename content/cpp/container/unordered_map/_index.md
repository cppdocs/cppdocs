---
title: "std::unordered_map"
source_path: "cpp/container/unordered_map"
header: "<unordered_map>"
since: "C++11"
---

`std::unordered_map` is an associative container that stores key-value pairs with unique keys.

Elements are organized into buckets according to the hash of the key, so lookup, insertion, and erasure have average constant-time complexity.

## Declarations
```cpp
template<
class Key,
class T,
class Hash = std::hash<Key>,
class KeyEqual = std::equal_to<Key>,
class Allocator = std::allocator<std::pair<const Key, T>>
> class unordered_map;
```
_(since C++11)_

```cpp
namespace pmr {
template<
class Key,
class T,
class Hash = std::hash<Key>,
class KeyEqual = std::equal_to<Key>
> using unordered_map =
std::unordered_map<Key, T, Hash, KeyEqual,
std::pmr::polymorphic_allocator<std::pair<const Key, T>>>;
}
```
_(since C++17)_

## Template parameters
- `Key`: key type.
- `T`: mapped value type.
- `Hash`: hash function object used to place keys into buckets. Equivalent keys must produce the same hash value.
- `KeyEqual`: equality predicate used to test whether two keys are equivalent.
- `Allocator`: allocator used to manage the stored `std::pair<const Key, T>` objects. It must satisfy the [Allocator](/cpp/named_req/allocator/) requirements.

## Semantics
`unordered_map` meets the requirements of [Container](/cpp/named_req/container/), [AllocatorAwareContainer](/cpp/named_req/allocatorawarecontainer/), and [UnorderedAssociativeContainer](/cpp/named_req/unorderedassociativecontainer/).

Keys are unique: for any key-equivalence class, at most one element is present.

Hash-based lookup relies on both `Hash` and `KeyEqual`. If `KeyEqual(a, b)` is `true`, then `Hash(a)` and `Hash(b)` must yield the same value.

Iteration order is not sorted and does not have the stability guarantees of ordered associative containers such as [`std::map`](/cpp/container/map/). Rehashing may move elements between buckets and change iteration order.

## Example
```cpp
#include <iostream>
#include <string>
#include <unordered_map>
 
int main()
{
    std::unordered_map<std::string, int> word_count{
        {"red", 2},
        {"green", 4},
        {"blue", 1}
    };
 
    word_count["red"] += 1;
    word_count["black"] = 3;
 
    for (const auto& [word, count] : word_count)
        std::cout << word << ": " << count << '\n';
}
```

This is the typical `unordered_map` usage pattern: key-based lookup with unique keys, average constant-time updates, and no meaningful sort order.

## Member types
| Member type | Definition |
| --- | --- |
| `key_type` | `Key` |
| `mapped_type` | `T` |
| `value_type` | `std::pair<const Key, T>` |
| `size_type` | Unsigned integer type, usually `std::size_t` |
| `difference_type` | Signed integer type, usually `std::ptrdiff_t` |
| `hasher` | `Hash` |
| `key_equal` | `KeyEqual` |
| `allocator_type` | `Allocator` |
| `reference` | `value_type&` |
| `const_reference` | `const value_type&` |
| `pointer` | allocator-aware pointer to `value_type` |
| `const_pointer` | allocator-aware pointer to `const value_type` |
| `iterator`, `const_iterator` | Forward iterators over the whole container |
| `local_iterator`, `const_local_iterator` | Forward iterators within one bucket |
| `node_type` | Node handle for extracted elements ([C++17](/cpp/17.html)) |
| `insert_return_type` | Return type for node-handle insertion ([C++17](/cpp/17.html)) |

## Iterator invalidation
| Operation | Invalidation |
| --- | --- |
| Read-only operations, `swap` | Never invalidate iterators to existing elements |
| `clear`, `rehash`, `reserve`, `operator=` | Always invalidate all iterators |
| `insert`, `emplace`, `operator[]`, `insert_or_assign`, `try_emplace` | Invalidate iterators only if the operation causes rehashing |
| `erase` | Invalidates only iterators and references to the erased element |

The `end()` iterator is invalidated by `swap`, even though iterators referring to elements remain valid.

References and pointers to stored key-value pairs remain valid across rehashing and swap; they are invalidated only when the referenced element is erased.

## Reference map
| Area | Key entries |
| --- | --- |
| Construction and lifetime | [unordered_map::unordered_map](/cpp/container/unordered_map/unordered_map/), [unordered_map::~unordered_map](/cpp/container/unordered_map/~unordered_map/), [unordered_map::operator=](/cpp/container/unordered_map/operator%3D/), [get_allocator](/cpp/container/unordered_map/get_allocator/) |
| Iterators | [begin, cbegin](/cpp/container/unordered_map/begin/), [end, cend](/cpp/container/unordered_map/end/), [bucket begin, cbegin](/cpp/container/unordered_map/begin2/), [bucket end, cend](/cpp/container/unordered_map/end2/) |
| Capacity | [empty](/cpp/container/unordered_map/empty/), [size](/cpp/container/unordered_map/size/), [max_size](/cpp/container/unordered_map/max_size/) |
| Modifiers | [clear](/cpp/container/unordered_map/clear/), [insert](/cpp/container/unordered_map/insert/), [insert_range](/cpp/container/unordered_map/insert_range/), [insert_or_assign](/cpp/container/unordered_map/insert_or_assign/), [emplace](/cpp/container/unordered_map/emplace/), [emplace_hint](/cpp/container/unordered_map/emplace_hint/), [try_emplace](/cpp/container/unordered_map/try_emplace/), [erase](/cpp/container/unordered_map/erase/), [swap](/cpp/container/unordered_map/swap/), [extract](/cpp/container/unordered_map/extract/), [merge](/cpp/container/unordered_map/merge/) |
| Lookup | [at](/cpp/container/unordered_map/at/), [operator[]](/cpp/container/unordered_map/operator_at/), [count](/cpp/container/unordered_map/count/), [find](/cpp/container/unordered_map/find/), [contains](/cpp/container/unordered_map/contains/), [equal_range](/cpp/container/unordered_map/equal_range/) |
| Bucket interface | [bucket_count](/cpp/container/unordered_map/bucket_count/), [max_bucket_count](/cpp/container/unordered_map/max_bucket_count/), [bucket_size](/cpp/container/unordered_map/bucket_size/), [bucket](/cpp/container/unordered_map/bucket/) |
| Hash policy and observers | [load_factor](/cpp/container/unordered_map/load_factor/), [max_load_factor](/cpp/container/unordered_map/max_load_factor/), [rehash](/cpp/container/unordered_map/rehash/), [reserve](/cpp/container/unordered_map/reserve/), [hash_function](/cpp/container/unordered_map/hash_function/), [key_eq](/cpp/container/unordered_map/key_eq/) |
| Non-member functions | [comparison operators](/cpp/container/unordered_map/operator_cmp/), [`std::swap(std::unordered_map)`](/cpp/container/unordered_map/swap2/), [erase_if](/cpp/container/unordered_map/erase_if/) |

## Deduction guides
The class has [deduction guides](/cpp/container/unordered_map/deduction_guides/) so constructor arguments can infer `Key`, `T`, and related policy types where the selected constructor permits it.

## Notes
`unordered_map` is usually the right default when keys are unique and fast average-case lookup matters more than sorted traversal.

If stable ordering, lower-bound queries, or ordered iteration are important, [`std::map`](/cpp/container/map/) is the better fit.

### Feature-test macros
| Macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_containers_ranges` | `202202L` | C++23 | ranges construction and insertion for containers |

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2050 | C++11 | the definitions of `reference`, `const_reference`, `pointer`, and `const_pointer` were based on `allocator_type` | based on `value_type` and `std::allocator_traits` |

## See also
- [unordered_multimap](/cpp/container/unordered_multimap/)
- [map](/cpp/container/map/)
- [flat_map](/cpp/container/flat_map/)
