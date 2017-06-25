import java.io.IOException;
import java.io.RandomAccessFile;
import java.math.BigInteger;
import java.text.NumberFormat;
import java.util.Random;
import java.lang.Math;

public class CacheTest {

//	private static long lookups;
//	private static long hits;
	private static RandomAccessFile in;

  private static float hit_rate;

	private static MyObject getObject(long index)
	{
		return null;
	}

	/**
	 * @param sampleSize
	 * @return
	 */
	private static void runRandomTest(Cache<Long, MyObject> myCache, int n, int numTests, long seed)
	{
    Random rand = new Random(seed);

    int max_num = n;
    int r_int;

    for (int i = 0; i < numTests; i+=1) {
      r_int = Math.round(rand.nextInt(max_num) + 1);
      myCache.put(r_int, r_int);
    }

    for (int i = 0; i < numTests; i+=1) {
      r_int = Math.round(rand.nextInt(max_num) + 1);
      myCache.get(r_int);
    }

    hit_rate = myCache.getHitRatio();
	}

	private static void runHalfNormalTest(Cache<Long, MyObject> myCache, int std_dev, int numTests, int range, long seed)
	{
    // Generate gaussian distribution then sample half gaussian distribution from it;
    // with desired standard deviation and zero mean
    Random r = new Random();
    double sample;
    for (int i = 0; i < numTests; i+=1) {
      // Taking absolute value for getting half gaussian
      // See wikipedia for half gaussian
      sample = Math.round(Math.abs(r.nextGaussian()*std_dev + 0));
      if (sample > 1) {
        continue;
      }
      myCache.put((int)sample, (int)sample);
    }

    for (int i = 0; i < numTests; i+=1) {
      // Taking absolute value for getting half gaussian
      // See wikipedia for half gaussian
      sample = Math.round(Math.abs(r.nextGaussian()*std_dev + 0));
      myCache.put((int)sample);
    }

    hit_rate = myCache.gethitRatio();

	}


	/**
	 * @param args
	 * @throws IOException
	 */
	public static void main(String[] args) throws IOException
	{

			if (args.length < 6) {
				System.err.println("Usage: java CacheTest <maxCacheSize> <keyRange> <data file> <#tests> <standard deviation> <seed>");
				System.exit(1);
			}

			int maxCacheSize = Integer.parseInt(args[0]);
			int n = Integer.parseInt(args[1]);
			int numTests = Integer.parseInt(args[3]);
			int stdDev = Integer.parseInt(args[4]);
			long seed = Long.parseLong(args[5]);


      // n used as capacity indicator
      int capacity = 500;
			Cache<Long, MyObject> myCache = new Cache<Long, MyObject>(capacity); //fill in args*/


			runRandomTest(myCache, n, numTests, seed);
			NumberFormat fmt = NumberFormat.getPercentInstance();
			System.out.println("CacheTest (Random):  maxCacheSize="+maxCacheSize+
			                   " numTests="+numTests+
							   " hit ratio="+fmt.format(((double) hit_rate)));

			//runHalfNormalTest(myCache, std_dev, numTests, stdDev, seed);
			System.out.println("CacheTest (Half-Normal):  maxCacheSize="+maxCacheSize+
							   " std deviation = "+stdDev+
			           	       " numTests="+numTests+
					           " hit ratio="+fmt.format(((double) hit_rate)));
	}

}
