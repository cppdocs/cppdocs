---
title: "std::experimental::ranges::tagged<Base,Tags...>::swap"
source_path: "cpp/experimental/ranges/utility/tagged/swap"
category: "experimental"
---

Swap the contents of *this and rhs, as if by [ranges::swap](http://en.cppreference.com/w/cpp/ranges-utility-placeholder/swap)(static_cast<Base&>(*this), static_cast<Base&>(rhs));.

## Declarations
```cpp
constexpr void swap( tagged& rhs ) noexcept(/* see below */)
requires Swappable<Base>;
```

## See also
- [ranges::swap(ranges::tagged)](/cpp/experimental/ranges/utility/tagged/swap2/)
