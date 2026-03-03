---
title: "std::experimental::ranges::swap (ranges::tagged)"
source_path: "cpp/experimental/ranges/utility/tagged/swap2"
category: "experimental"
---

Swap the contents of *this and rhs, as if by lhs.swap(rhs);.

## Declarations
```cpp
friend constexpr void swap( tagged& lhs, tagged& rhs ) noexcept(noexcept(lhs.swap(rhs)))
requires Swappable<Base>;
```

## Notes
Unlike most non-member swaps in the standard library, this swap is a hidden friend function declared in the body of tagged, not a function template. The tagged in the function declaration is the injected-class-name.

## See also
- [swap](/cpp/experimental/ranges/utility/tagged/swap/)
