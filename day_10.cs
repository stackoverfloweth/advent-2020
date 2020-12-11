private List<int> input;
private Dictionary<int, int[]> sorted;
private int sum = 0;

void Main()
{
	//const input = [16,10,15,5,1,11,7,19,6,12,4]
	//input = new List<int> { 28, 33, 18, 42, 31, 14, 46, 20, 48, 47, 24, 23, 49, 45, 19, 38, 39, 11, 1, 32, 25, 35, 8, 17, 7, 9, 4, 2, 34, 10, 3};
	input = new List<int> { 2, 49, 78, 116, 143, 42, 142, 87, 132, 86, 67, 44, 136, 82, 125, 1, 108, 123, 46, 37, 137, 148, 106, 121, 10, 64, 165, 17, 102, 156, 22, 117, 31, 38, 24, 69, 131, 144, 162, 63, 171, 153, 90, 9, 107, 79, 7, 55, 138, 34, 52, 77, 152, 3, 158, 100, 45, 129, 130, 135, 23, 93, 96, 103, 124, 95, 8, 62, 39, 118, 164, 172, 75, 122, 20, 145, 14, 112, 61, 43, 141, 30, 85, 101, 151, 29, 113, 94, 68, 58, 76, 97, 28, 111, 128, 21, 11, 163, 161, 4, 168, 157, 27, 72 };

	// add socket
	input.Add(0);

	// add your device
	input.Add(max() + 3);

	//.OrderBy(x => x)
	sorted = input.ToDictionary(x => x, x => calculatePossibleNextSteps(x));
	traverse(0);
	Console.WriteLine(sum);
}

private int max()
{
	return input.Max();
}

private int[] calculatePossibleNextSteps(int target)
{
	return input.Where(x => x - target <= 3 && x - target >= 1).ToArray();
}

private void traverse(int index)
{
	if (!sorted[index].Any())
	{
		if (sum % 1000000 == 0)
		{
			Console.WriteLine(sum);
		}
		sum++;
	}

	Parallel.Invoke(sorted[index].Select(x => new Action(() => traverse(x))).ToArray());
}