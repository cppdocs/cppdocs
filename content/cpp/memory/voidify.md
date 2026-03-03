---
title: "voidify"
source_path: "cpp/memory/voidify"
category: "memory"
---

Returns the address of obj (implicitly converted to void*).

## Declarations
```cpp
template< class T >
void* voidify( T& obj ) noexcept;
```
_(exposition only*) (constexpr since C++17)_

## Parameters
- `obj`: the object whose address will be taken

## Return value
&obj

## Notes
This exposition-only function is introduced by [P0896R4](https://wg21.link/P0896R4). It is used to describe the effects of [uninitialized memory algorithms](/cpp/memory/#Uninitialized_memory_algorithms) which construct objects in uninitialized memory areas. The result pointer is used as the placement-params of a [placement new expression](/cpp/language/new/#Placement_new).

Initially, the return value was const_cast<void*>(static_cast<const volatile void*>([std::addressof](/cpp/memory/addressof/)(obj))), which breaks const-correctness. The explicit casts were removed by the resolution of [LWG issue 3870](https://cplusplus.github.io/LWG/issue3870), and the only conversion left is the implicit conversion to void*.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3870 | C++98 | the explicit casts broke const-correctness | removed these casts |

## See also
- [uninitialized_copy](/cpp/memory/uninitialized_copy/)
- [ranges::uninitialized_copy](/cpp/memory/ranges/uninitialized_copy/)
- [uninitialized_fill](/cpp/memory/uninitialized_fill/)
- [ranges::uninitialized_fill](/cpp/memory/ranges/uninitialized_fill/)
- [uninitialized_move](/cpp/memory/uninitialized_move/)
- [ranges::uninitialized_move](/cpp/memory/ranges/uninitialized_move/)
- [uninitialized_default_construct](/cpp/memory/uninitialized_default_construct/)
- [default-initialization](/cpp/language/default_initialization/)
- [ranges::uninitialized_default_construct](/cpp/memory/ranges/uninitialized_default_construct/)
- [default-initialization](/cpp/language/default_initialization/)
- [uninitialized_value_construct](/cpp/memory/uninitialized_value_construct/)
- [value-initialization](/cpp/language/value_initialization/)
- [ranges::uninitialized_value_construct](/cpp/memory/ranges/uninitialized_value_construct/)
- [value-initialization](/cpp/language/value_initialization/)
- [construct_at](/cpp/memory/construct_at/)
- [ranges::construct_at](/cpp/memory/ranges/construct_at/)
