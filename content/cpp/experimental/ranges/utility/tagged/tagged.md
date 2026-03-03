---
title: "std::experimental::ranges::tagged<Base,Tags...>::tagged"
source_path: "cpp/experimental/ranges/utility/tagged/tagged"
category: "experimental"
---

Constructs a tagged object.

## Declarations
```cpp
using Base::Base;
```

```cpp
tagged() = default;
```

```cpp
tagged( tagged&& that ) = default;
```

```cpp
tagged( const tagged& that ) = default;
```

```cpp
tagged( Base&& that ) noexcept(std::is_nothrow_move_constructible<Base>::value)
requires MoveConstructible<Base>;
```

```cpp
tagged( const Base& that ) noexcept(std::is_nothrow_copy_constructible<Base>::value)
requires CopyConstructible<Base>;
```

```cpp
template< class Other >
requires Constructible<Base, Other>
constexpr tagged( ranges::tagged<Other, Tags...> && that )
noexcept(std::is_nothrow_constructible<Base, Other>::value);
```

```cpp
template< class Other >
requires Constructible<Base, const Other&>
constexpr tagged( const ranges::tagged<Other, Tags...> &that );
```
