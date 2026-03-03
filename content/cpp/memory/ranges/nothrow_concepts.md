---
title: "no-throw-input-iterator, no-throw-forward-iterator, no-throw-sentinel-for, no-throw-input-range, no-throw-forward-range"
source_path: "cpp/memory/ranges/nothrow_concepts"
category: "memory"
---

These exposition-only concepts specify that no exceptions are thrown from operations required by algorithms on iterators, sentinels, and ranges.

## Declarations
```cpp
template< class I >
concept no-throw-input-iterator =
std::input_iterator<I> &&
std::is_lvalue_reference_v<std::iter_reference_t<I>> &&
std::same_as<std::remove_cvref_t<std::iter_reference_t<I>>, std::iter_value_t<I>>;
```
_(exposition only*)_

```cpp
template< class I >
concept no-throw-forward-iterator =
no-throw-input-iterator<I> &&
std::forward_iterator<I> &&
no-throw-sentinel-for<I, I>;
```
_(exposition only*)_

```cpp
template< class S, class I >
concept no-throw-sentinel-for = std::sentinel_for<S, I>;
```
_(exposition only*)_

```cpp
template< class R >
concept no-throw-input-range =
ranges::range<R> &&
no-throw-input-iterator<ranges::iterator_t<R>> &&
no-throw-sentinel-for<ranges::sentinel_t<R>, ranges::iterator_t<R>>;
```
_(exposition only*)_

```cpp
template< class R >
concept no-throw-forward-range =
no-throw-input-range<R> &&
no-throw-forward-iterator<ranges::iterator_t<R>>;
```
_(exposition only*)_

## Notes
These concepts allow some operations on iterators and sentinels to throw exceptions, e.g. operations on invalid values.

## See also
- [input_iterator](/cpp/iterator/input_iterator/)
- [forward_iterator](/cpp/iterator/forward_iterator/)
- [input_iterator](/cpp/iterator/input_iterator/)
- [sentinel_for](/cpp/iterator/sentinel_for/)
- [input_or_output_iterator](/cpp/iterator/input_or_output_iterator/)
- [ranges::input_range](/cpp/ranges/input_range/)
- [input_iterator](/cpp/iterator/input_iterator/)
- [ranges::forward_range](/cpp/ranges/forward_range/)
- [forward_iterator](/cpp/iterator/forward_iterator/)
