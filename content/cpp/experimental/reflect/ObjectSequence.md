---
title: "std::experimental::reflect::ObjectSequence"
source_path: "cpp/experimental/reflect/ObjectSequence"
header: "<experimental/reflect>"
category: "experimental"
---

The ObjectSequence concept is satisfied by meta-object sequence types.

## Declarations
```cpp
template< class T >
concept ObjectSequence = Object<T> && /* see below */;
```
_(reflection TS)_

## Example
```cpp
#include<cmath>
#include<experimental/reflect>
#include<tuple>
#include<type_traits>
 
namespace reflect = std::experimental::reflect;
 
template<reflect::Typed... Ms>
using tuple_from_seq_t = std::tuple<reflect::get_reflected_type_t<
    reflect::get_type_t<Ms>>...>;
 
template<reflect::Record T>
using collect_tuple = reflect::unpack_sequence_t<
    tuple_from_seq_t,
    reflect::get_data_members_t<T>>;
 
int main()
{
    static_assert(reflect::ObjectSequence<
                      reflect::get_data_members<reflexpr(std::div_t)>>, "");
    static_assert(std::is_same<collect_tuple<reflexpr(std::div_t)>,
                               std::tuple<int, int>>::value, "");
}
```
