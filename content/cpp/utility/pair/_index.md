---
title: "std::pair"
source_path: "cpp/utility/pair"
header: "<utility>"
---

`std::pair` stores exactly two values, `first` and `second`, as one object.

## Semantics
- `pair<T1, T2>` is the two-element building block in the tuple family: fixed size, heterogeneous, and value-oriented.
- The two elements are named members, not positional access only, which makes `pair` suitable when the values naturally form a small named association.
- Unlike [std::tuple](/cpp/utility/tuple/), `pair` is intentionally specialized for arity two and integrates directly with tuple-like APIs such as [get](/cpp/utility/pair/get/), `tuple_size`, and `tuple_element`.
- `pair` is commonly used for return values, map-like key/value objects, and algorithms that naturally produce two related results.

Use `pair` when the two-field grouping is obvious and stable. If the object needs domain-specific meaning, a named struct is often clearer.

## Declarations
```cpp
template< class T1, class T2 >
struct pair;
```

## Member objects
| Member | Type | Meaning |
| --- | --- | --- |
| `first` | `T1` | The first stored value |
| `second` | `T2` | The second stored value |

## Example
```cpp
#include <iostream>
#include <string>
#include <utility>
 
std::pair<std::string, int> describe()
{
    return {"apples", 3};
}
 
int main()
{
    auto [name, count] = describe();
    std::cout << name << ": " << count << '\n';
}
```

This is the common pattern: bundle two related results together, then unpack them with structured bindings or [get](/cpp/utility/pair/get/).

## Operational notes
- Construction and assignment are covered by [pair::pair](/cpp/utility/pair/pair/) and [pair::operator=](/cpp/utility/pair/operator=/).
- [swap](/cpp/utility/pair/swap/) exchanges the two element values with another pair of the same type.
- [make_pair](/cpp/utility/pair/make_pair/) is useful when you want type deduction without spelling `pair<T1, T2>` explicitly.
- [comparison operators](/cpp/utility/pair/operator_cmp/) compare pairs lexicographically: `first` is compared before `second`.
- [get](/cpp/utility/pair/get/) lets `pair` participate in tuple-like generic code.

## Reference map
| Area | Key entries |
| --- | --- |
| Construction and mutation | [pair::pair](/cpp/utility/pair/pair/), [pair::operator=](/cpp/utility/pair/operator=/), [pair::swap](/cpp/utility/pair/swap/) |
| Tuple-like access and algorithms | [get](/cpp/utility/pair/get/), [make_pair](/cpp/utility/pair/make_pair/), [`std::swap(std::pair)`](/cpp/utility/pair/swap2/), [comparison operators](/cpp/utility/pair/operator_cmp/) |
| Helper specializations | [tuple_size&lt;std::pair&gt;](/cpp/utility/pair/tuple_size/), [tuple_element&lt;std::pair&gt;](/cpp/utility/pair/tuple_element/), [basic_common_reference&lt;std::pair&gt;](/cpp/utility/pair/basic_common_reference/), [common_type&lt;std::pair&gt;](/cpp/utility/pair/common_type/), [formatter&lt;pair-or-tuple&gt;](/cpp/utility/format/tuple_formatter/) |
| Type deduction | [deduction guides](/cpp/utility/pair/deduction_guides/) |

## Notes
If neither `T1` nor `T2` is a possibly cv-qualified class type with a non-trivial destructor, or an array of such a type, the destructor of `pair` is trivial.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2796 | C++98 | triviality of the destructor of `pair` was unspecified | specified |

## See also
- [std::tuple](/cpp/utility/tuple/)
- [std::tie](/cpp/utility/tuple/tie/)
