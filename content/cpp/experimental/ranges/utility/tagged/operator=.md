---
title: "std::experimental::ranges::tagged<Base,Tags...>::operator="
source_path: "cpp/experimental/ranges/utility/tagged/operator"
category: "experimental"
---

Assigns the contents of that to *this.

## Declarations
```cpp
tagged &operator=( tagged&& that ) = default;
```

```cpp
tagged &operator=( const tagged& that ) = default;
```

```cpp
template< class Other >
requires Assignable<Base&, Other>
constexpr tagged& operator=( ranges::tagged<Other, Tags...>&& that )
noexcept(std::is_nothrow_assignable<Base&, Other>::value);
```

```cpp
template< class Other >
requires Assignable<Base&, const Other&>
constexpr tagged& operator=( const ranges::tagged<Other, Tags...>& that );
```

```cpp
template< class U >
requires Assignable<Base&, U> && !Same<std::decay_t<U>, tagged>
constexpr tagged& operator=( U&& that ) noexcept(std::is_nothrow_assignable<Base&, U>::value);
```

## Return value
*this.
