from typing import TypeVar, Generic, List, cast

T = TypeVar('T')


class ArrayUtils(Generic[T]):
	@staticmethod
	def find_by_id(id: str, array: List[T]) -> T or None:
		for item in array:
			if item.id == id:
				return cast(T, item)
		return None

	@staticmethod
	def remove_by_id(id: str, array: List[T]) -> List[T]:
		for item in array:
			if item.id == id:
				array.remove(item)
		return array

	@staticmethod
	def exists_by_id(id: str, array: List[T]) -> bool:
		for item in array:
			if item.id == id:
				return True
		return False

	@staticmethod
	def find_by_id_and_replace(given_item: T, array: List[T]):
		for i, item in enumerate(array):
			if item.id == given_item.id:
				array[i] = given_item
				break
